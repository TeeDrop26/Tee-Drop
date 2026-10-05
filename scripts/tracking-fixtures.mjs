import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { randomUUID } from 'node:crypto';
const root = new URL('../', import.meta.url);
const read = f => fs.readFileSync(new URL(f,root),'utf8');
const metaScope = {}; vm.runInNewContext(read('tracking/backend/Metadata.gs')+';this.metadata=TRACKING_METADATA',metaScope);
const metadata = JSON.parse(JSON.stringify(metaScope.metadata));
const area='/golf-courses/new-philadelphia-oh/', course='/courses/zoar-village-golf-course-zoar-oh/';
export function browser(url, storage=new Map(), referrer='', options={}) {
  const listeners={}, windows={}, sent=[], location=new URL(url); let now=Date.now();
  class Anchor {
    constructor(href,dataset={}) { this.href=new URL(href,location).href;this.dataset=dataset; }
    closest(selector) { return selector==='a[href]' ? this : null; }
    hasAttribute() { return false; }
  }
  const sessionStorage={getItem:k=>{if(options.blockStorage)throw Error();return storage.get(k)||null;},setItem:(k,v)=>{if(options.blockStorage)throw Error();storage.set(k,v);}};
  const document={referrer,addEventListener:(n,fn)=>listeners[n]=fn};
  const window={TEE_DROP_TRACKING_CONFIG:{enabled:options.active||false,endpoint:'https://script.google.com/macros/s/SYNTHETIC/exec',productionHosts:['www.playteedrop.com'],campaigns:options.campaigns||{}},TEE_DROP_TRACKING_METADATA:metadata,addEventListener:(n,fn)=>windows[n]=fn};
  const sandbox={window,document,location,sessionStorage,URL,URLSearchParams,crypto:{randomUUID},Element:Anchor,Date:class extends Date {static now(){return now;}},fetch:(...args)=>{sent.push(args);return Promise.reject(Error('offline'));}};
  vm.runInNewContext(read('tracking.js'),sandbox);
  return { window,sent,storage,runAgain:()=>vm.runInNewContext(read('tracking.js'),sandbox),advance:ms=>now+=ms,
    events:()=>JSON.parse(JSON.stringify(window.TeeDropTracking?.previewEvents||[])),
    click:(href,dataset={},type='click',button=0)=>listeners[type]?.({type,button,target:new Anchor(href,dataset),defaultPrevented:false}),
    restore:()=>windows.pageshow?.({persisted:true}) };
}
export function journey() {
  const storage=new Map(), events=[];
  let b=browser('http://localhost/?secret=never-store',storage,'https://www.google.com/search?q=private');
  b.click('https://example.com/booking',{trackingCourse:'td-0001',trackingAction:'booking',trackingPlacement:'course_list'});
  b.click(area);events.push(...b.events());
  b=browser('http://localhost'+area,storage,'http://localhost/');b.click(course);events.push(...b.events());
  b=browser('http://localhost'+course,storage,'http://localhost'+area);
  b.click('https://example.com/booking',{trackingCourse:'td-0001',trackingAction:'booking'});
  b.click('https://example.com/rates',{trackingCourse:'td-0001',trackingAction:'rate_source'});events.push(...b.events());
  b=browser('http://localhost/indoor.html',storage,'http://localhost'+course);
  b.click('https://example.com/indoor',{trackingFacility:'indoor-0001',trackingAction:'booking',trackingPlacement:'indoor_list'});events.push(...b.events());
  b=browser('http://localhost/about.html',storage,'http://localhost/indoor.html');events.push(...b.events());
  return events;
}
export function receiver(options={}) {
  const sheets=new Map();let writes=0,formatCalls=0,workbookCalls=0,locked=false;
  class Sheet {
    constructor(rows){this.rows=rows;}
    getLastRow(){return this.rows.length;}
    appendRow(row){writes++;this.rows.push(row);}
    getRange(row,col,height,width){return {getValues:()=>this.rows.slice(row-1,row-1+height).map(r=>r.slice(col-1,col-1+width)),
      createTextFinder:value=>({matchEntireCell(){return this;},findNext:()=>this.rows.slice(row-1).some(r=>r[col-1]===value)}),
      setNumberFormat(){formatCalls++;throw Error('typed column');}};}
  }
  const ss={getId:()=>options.wrongWorkbook?'wrong':'1jLx34074y7NcqKThbLzhjY1QS6Jbu1dFPma_5oZpJ1s',getSheetByName:n=>sheets.get(n)};
  const sandbox={Date,SpreadsheetApp:{getActiveSpreadsheet:()=>{workbookCalls++;return ss;},flush:()=>{if(options.flushError)throw Error('after write');}},
    LockService:{getScriptLock:()=>({tryLock:()=>{if(options.busy)return false;assert(!locked);locked=true;return true;},releaseLock:()=>locked=false})},
    ContentService:{MimeType:{JSON:'json'},createTextOutput:s=>({setMimeType:()=>s})},Utilities:{formatDate:()=> 'Oct 5, 2026'}};
  vm.createContext(sandbox);vm.runInContext(read('tracking/backend/Metadata.gs')+read('tracking/backend/Code.gs')+read('tracking/backend/Summary.gs')+';this.columns=EVENT_COLUMNS;this.legacy=LEGACY_COLUMNS;',sandbox);
  sheets.set('Events',new Sheet([Array.from(sandbox.columns)]));
  for(const [name,headers]of Object.entries(sandbox.legacy))sheets.set(name,new Sheet([Array.from(headers)]));
  return {sheets,sandbox,stats:()=>({writes,formatCalls,workbookCalls,locked}),post:d=>JSON.parse(sandbox.doPost({postData:{contents:typeof d==='string'?d:JSON.stringify(d)}}))};
}
export { metadata, read, area, course };
