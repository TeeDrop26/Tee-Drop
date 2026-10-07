import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { browser, receiver, read, area, course } from './tracking-fixtures.mjs';

const scope={window:{}};
vm.runInNewContext(read('tracking-config.js'),scope);
const campaigns=JSON.parse(JSON.stringify(scope.window.TEE_DROP_TRACKING_CONFIG.campaigns));

test('only ohio-flyer is approved, and a complete flyer journey is accepted by the receiver',()=>{
  assert.deepEqual(campaigns,{'ohio-flyer':{source:'flyer',medium:'print'}});
  const storage=new Map(),events=[];
  let b=browser('http://localhost/?campaign=ohio-flyer&private=never-store',storage,'',{campaigns});
  b.click(area);events.push(...b.events());
  b=browser('http://localhost'+area,storage,'http://localhost/',{campaigns});
  b.click(course);events.push(...b.events());
  b=browser('http://localhost'+course,storage,'http://localhost'+area,{campaigns});
  b.click('https://example.com/booking',{trackingCourse:'td-0001',trackingAction:'booking'});
  events.push(...b.events());
  assert.equal(events.length,6);
  assert.equal(new Set(events.map(e=>e.sessionId)).size,1);
  assert.deepEqual(events.map(e=>e.eventSequence),[1,2,3,4,5,6]);
  assert(events.every(e=>e.campaign==='ohio-flyer'&&e.entrySource==='flyer'&&e.entryMedium==='print'&&e.entryPage==='/'));
  assert.equal(events[4].previousPage,area);
  assert(!JSON.stringify(events).includes('never-store'));
  const r=receiver(); for(const e of events) assert.deepEqual(r.post(e),{ok:true});
  assert.equal(r.stats().writes,6);
  assert.deepEqual(r.post({...events[0],campaign:'unapproved'}),{ok:false,error:'invalid_attribution'});
});

test('unknown and near-match values stay excluded; normal attribution and existing sessions remain intact',()=>{
  for(const query of ['campaign=unknown','campaign=OHIO-FLYER','campaign=ohio-flyer-extra','campaign=%20ohio-flyer','arbitrary=ohio-flyer']) {
    const e=browser('http://localhost/?'+query,new Map(),'https://www.google.com/search?q=private',{campaigns}).events()[0];
    assert.equal(e.campaign,'');assert.equal(e.entrySource,'google');assert.equal(e.entryMedium,'organic');
  }
  assert.equal(browser('http://localhost/',new Map(),'',{campaigns}).events()[0].entrySource,'direct_or_unknown');
  const storage=new Map();
  const initial=browser('http://localhost'+area,storage,'https://www.google.com/',{campaigns}).events()[0];
  const later=browser('http://localhost/?campaign=ohio-flyer',storage,'',{campaigns}).events()[0];
  assert.equal(later.sessionId,initial.sessionId);assert.equal(later.entrySource,'google');assert.equal(later.campaign,'');assert.equal(later.entryPage,area);
});

test('homepage canonical stays query-free and collector cannot cancel navigation',()=>{
  assert.match(read('index.html'),/<link rel="canonical" href="https:\/\/www.playteedrop.com\/"/);
  assert(!/preventDefault\s*\(/.test(read('tracking.js')));
});
