// Local-only review server. The preview panel and synthetic collector are never built into the site.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../',import.meta.url));
const events=[];
const failureMode=process.argv.includes('--failure');
const panel=`<aside style="position:fixed;bottom:8px;right:8px;z-index:10000;background:white;color:#111;border:2px solid #164832;padding:12px;width:310px;max-height:220px;overflow:auto;font:12px system-ui"><strong>LOCAL TRACKING REVIEW — no production requests</strong><button id="review-reset">Reset test session</button><pre id="tracking-review-events" style="white-space:pre-wrap"></pre></aside><script>
let shown=0;function reviewFlush(){const events=window.TeeDropTracking?.previewEvents||[];document.getElementById('tracking-review-events').textContent=events.map(e=>e.eventType+' | '+e.page+' | '+(e.actionType||e.targetPage||'')+' | '+e.entrySource+' | #'+e.eventSequence).join('\\n');for(;shown<events.length;shown++)fetch('/__review/event',{method:'POST',body:JSON.stringify(events[shown]),keepalive:true});}setInterval(reviewFlush,100);window.addEventListener('pagehide',reviewFlush);document.getElementById('review-reset').onclick=async()=>{shown=(window.TeeDropTracking?.previewEvents||[]).length;await fetch('/__review/reset',{method:'POST'});sessionStorage.removeItem('teeDropTrackingV2Session');location.href='/';};
</script>`;
http.createServer((req,res)=>{
  const url=new URL(req.url,'http://localhost');
  if(url.pathname==='/__review/reset'&&req.method==='POST'){events.length=0;res.end('ok');return;}
  if(url.pathname==='/__review/event'&&req.method==='POST'){let body='';req.on('data',b=>body+=b);req.on('end',()=>{if(body.length<6000)events.push(JSON.parse(body));res.end('ok');});return;}
  if(url.pathname==='/__review/events'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(events,null,2));return;}
  const relative=decodeURIComponent(url.pathname).replace(/^\//,'')+(url.pathname.endsWith('/')?'index.html':'');
  const file=path.resolve(root,relative);
  if(!file.startsWith(root)||/(^|[\\/])(?:\.git|tracking|scripts)(?:[\\/]|$)/.test(relative)){res.writeHead(404).end();return;}
  try {let content=fs.readFileSync(file);const ext=path.extname(file);if(ext==='.html')content=content.toString().replace('</body>',panel+'</body>');
  // Exercise the real production transport branch with an always-rejecting fetch.
  // This local server substitution never writes or changes production source files.
  if(failureMode&&relative==='tracking-config.js') content='window.TEE_DROP_TRACKING_CONFIG={enabled:true,endpoint:"https://script.google.com/macros/s/SYNTHETIC/exec",productionHosts:["127.0.0.1"],campaigns:{}};const originalFetch=window.fetch;window.fetch=(url,options)=>{if(url===window.TEE_DROP_TRACKING_CONFIG.endpoint){originalFetch("/__review/event",{method:"POST",body:options.body,keepalive:true});return Promise.reject(new Error("Synthetic endpoint failure"));}return originalFetch(url,options);};';
  if(failureMode&&relative==='tracking.js') content=content.toString().replace('const preview = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);','const preview = false;');
  res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg'})[ext]||'application/octet-stream');res.end(content);}catch{res.writeHead(404).end();}
}).listen(4177,'127.0.0.1',()=>console.log('Local review: http://127.0.0.1:4177'));
