import test from 'node:test';
import assert from 'node:assert/strict';
import { browser, journey, receiver, metadata, read, area, course } from './tracking-fixtures.mjs';

test('complete journey preserves acquisition, canonical paths, IDs and sequence',()=>{
  const events=journey();assert.equal(events.length,11);assert.equal(new Set(events.map(e=>e.sessionId)).size,1);
  assert(events.every(e=>e.entrySource==='google'&&e.entryPage==='/'));
  assert.deepEqual(events.map(e=>e.eventSequence),Array.from({length:11},(_,i)=>i+1));
  assert.equal(events.filter(e=>e.eventType==='page_view').length,5);
  assert.equal(events.find(e=>e.page===course).previousPage,area);
  assert(!JSON.stringify(events).includes('secret'));assert(!JSON.stringify(events).includes('https:'));
  const r=receiver();for(const e of events)assert.deepEqual(r.post(e),{ok:true});
  assert.equal(r.stats().writes,11);assert.equal(r.stats().formatCalls,0);
});
test('refresh, back-forward restore, inactivity and blocked storage',()=>{
  const s=new Map();let b=browser('http://localhost/',s);const first=b.events()[0];b.runAgain();assert.equal(b.events().length,1);
  b.restore();assert.equal(b.events().length,2);assert.notEqual(b.events()[1].pageViewId,first.pageViewId);
  b=browser('http://localhost/index.html?source=unapproved',s);assert.equal(b.events()[0].sessionId,first.sessionId);
  b.advance(31*60000);b.click(area);assert.equal(b.events().length,3);assert.equal(b.events()[1].eventType,'page_view');assert.notEqual(b.events()[1].sessionId,first.sessionId);
  b=browser('http://localhost/',new Map(),'https://private.example/path',{blockStorage:true});b.click(area);assert.equal(b.events().length,2);assert.equal(b.events()[0].entrySource,'other_referral');
});
test('campaign allowlist and private fields never enter the event',()=>{
  let b=browser('http://localhost/?utm_campaign=private-person&source=other',new Map());assert.equal(b.events()[0].campaign,'');
  b=browser('http://localhost/?utm_campaign=approved',new Map(),'',{campaigns:{approved:{source:'newsletter',medium:'campaign'}}});assert.equal(b.events()[0].entrySource,'newsletter');
});
test('keyboard click/middle-click captured once; right click and same-page anchor ignored',()=>{
  const b=browser('http://localhost/');b.click(area,{},'click',0);b.click(course,{},'auxclick',1);b.click(course,{},'auxclick',2);b.click('/#area-guides');assert.equal(b.events().length,3);
});
test('production defaults off, preview hosts excluded, failed transport never throws',async()=>{
  assert.equal(browser('https://www.playteedrop.com/').sent.length,0);
  assert.equal(browser('https://preview.example/').sent.length,0);
  const b=browser('https://www.playteedrop.com/',new Map(),'',{active:true});b.click(area);await Promise.resolve();assert.equal(b.sent.length,2);
  assert.equal(b.sent[0][1].credentials,'omit');assert.equal(b.sent[0][1].referrerPolicy,'no-referrer');
});
test('strict validation: unknown/malformed/private fields and mismatched targets write nothing',()=>{
  const r=receiver(),valid=journey()[0];
  for(const bad of ['{','null','[]','{}',JSON.stringify({...valid,eventType:'seo_page_view'}),JSON.stringify({...valid,fullUrl:'private'}),JSON.stringify({...valid,page:'/?x=private'}),JSON.stringify({...valid,eventSequence:0}),JSON.stringify({...valid,pageType:'course'}),JSON.stringify({...valid,campaign:'unknown'}),JSON.stringify({...valid,eventId:'=formula'})])assert.equal(r.post(bad).ok,false);
  const outbound=journey().find(e=>e.actionType==='rate_source');assert.equal(r.post({...outbound,targetCourseId:'td-9999'}).ok,false);
  assert.equal(r.post({...outbound,actionType:'course_info'}).ok,false);
  assert.equal(r.stats().writes,0);assert.equal(r.stats().workbookCalls,0);
});
test('durable duplicates, partial failures, busy lock and mismatched headers',()=>{
  const e=journey()[0],r=receiver();assert(r.post(e).ok);assert.equal(r.post(e).duplicate,true);assert.equal(r.stats().writes,1);
  const partial=receiver({flushError:true});assert.equal(partial.post(e).error,'write_failed');assert.equal(partial.post(e).duplicate,true);assert.equal(partial.stats().writes,1);
  assert.equal(receiver({busy:true}).post(e).error,'busy');assert.equal(receiver({wrongWorkbook:true}).post(e).error,'write_failed');
  const badHeaders=receiver();badHeaders.sheets.get('Events').rows[0][0]='Wrong';assert.equal(badHeaders.post(e).error,'write_failed');assert.equal(badHeaders.stats().writes,0);
});
test('four exact legacy types preserved without typed-column formatting or fallback',()=>{
  const r=receiver();for(const eventType of ['outdoor_page_view','indoor_page_view','course_click','indoor_click'])assert(r.post({eventType,course:'SYNTHETIC',page:'/'}).ok);
  assert.equal(r.sheets.get('Events').rows.length,1);assert.equal(r.stats().writes,4);assert.equal(r.stats().formatCalls,0);
  assert.equal(r.post({eventType:'garbage',course:'Fake'}).ok,false);assert.equal(r.stats().writes,4);
});
test('summary counts distinct useful views, guides, targets and downstream acquisition',()=>{
  const r=receiver(),now=new Date('2026-10-05T14:00:00Z');const events=journey().map(e=>({...e,receivedAt:now}));
  const report=r.sandbox.summarizeTracking(events,new Date('2026-10-05'),new Date('2026-10-06'));
  assert.equal(report.views,5);assert.equal(report.useful,4);assert.equal(report.outbound,4);assert.equal(report.unmatchedActions,0);
  assert.equal(report.guides[0][1],'td-0001');assert.equal(report.acquisition[0][4],1);assert.equal(report.acquisition[0][5],1);
  const empty=r.sandbox.summarizeTracking(events,new Date('2026-10-06'),new Date('2026-10-07'));assert.equal(empty.views,0);
});
test('all generated page/action metadata and homepage/Indoor emitters match contract',()=>{
  assert.equal(Object.keys(metadata.pages).length,80);
  for(const [p,info]of Object.entries(metadata.pages)) {
    const html=read(p==='/'?'index.html':p.slice(1)+(p.endsWith('/')?'index.html':''));
    assert.equal((html.match(/src="\/tracking.js"/g)||[]).length,1,p);
    for(const m of html.matchAll(/<a\b[^>]*data-tracking-course="([^"]+)"[^>]*data-tracking-action="([^"]+)"/g))assert(metadata.allowed[p].includes(m[1]+':'+m[2]));
    if(info.type==='course')assert(metadata.courses[info.courseId]);
  }
  assert(!/fetch\(|trackOutdoorPageView|trackCourseClick|formspree/.test(read('app.js')));
  assert(!/fetch\(|trackIndoorPageView|trackIndoorClick/.test(read('indoor.js')));
});
