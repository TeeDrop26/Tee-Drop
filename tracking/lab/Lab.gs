// Run only in the existing synthetic workbook. Never deploy this file.
function runTrackingV2Lab() {
  if (SpreadsheetApp.getActiveSpreadsheet().getId() !== SYNTHETIC_WORKBOOK_ID) throw new Error('Synthetic workbook required');
  setupTrackingV2();
  const ss = trackingWorkbook(), events = ss.getSheetByName('Events');
  // Refuse accidental repeated fixture insertion; rerunning validates duplicate behavior.
  const baseCount = events.getLastRow();
  const result = [];
  function check(name,condition){result.push([name,condition?'PASS':'FAIL']);if(!condition)throw new Error(name);}
  const call = data => JSON.parse(doPost({postData:{contents:typeof data==='string'?data:JSON.stringify(data)}}).getContent());
  for (const e of LAB_JOURNEY) check(e.eventSequence+' '+e.eventType,call(e).ok===true);
  const after = events.getLastRow();
  check('Fixture persisted once',after===Math.max(baseCount,LAB_JOURNEY.length+1));
  check('Duplicate recognized',call(LAB_JOURNEY[0]).duplicate===true);
  check('Duplicate adds no row',events.getLastRow()===after);
  for (const bad of ['{','null','[]','{}',JSON.stringify({...LAB_JOURNEY[0],eventType:'seo_page_view'}),JSON.stringify({...LAB_JOURNEY[0],page:'/?private=never'}),JSON.stringify({...LAB_JOURNEY[0],fullUrl:'private'})]) check('Reject '+bad.slice(0,30),call(bad).ok===false);
  check('Rejected events add no Events rows',events.getLastRow()===after);
  // Existing lab preserves the typed visit columns that reproduced the V8 failure.
  for(const type of ['outdoor_page_view','indoor_page_view','course_click','indoor_click'])check('Typed-table legacy '+type,call({eventType:type,course:'SYNTHETIC V2 TEST',facility:'SYNTHETIC V2 TEST',page:'/',trafficSource:'synthetic'}).ok===true);
  const summary=ss.getSheetByName('Tracking Summary');
  summary.getRange('B3:B4').setValues([[new Date()],[new Date()]]);
  refreshTrackingSummary();
  const totals=summary.getRange('A7:E7').getValues()[0];
  check('Five views / four useful / four outbound',totals[0]===5&&totals[1]===4&&totals[3]===4&&totals[4]===0);
  let log=ss.getSheetByName('Tracking V2 Lab Results');if(!log)log=ss.insertSheet('Tracking V2 Lab Results');
  log.getRange(1,1,result.length+1,2).setValues([['Synthetic acceptance check','Result'],...result]);
  log.setColumnWidth(1,420);log.setColumnWidth(2,100);
  console.log('Tracking V2 synthetic checks passed: '+result.length+'; Events rows: '+(after-1));
}

function runTrackingSummaryDateCheck() {
  if (SpreadsheetApp.getActiveSpreadsheet().getId() !== SYNTHETIC_WORKBOOK_ID) throw new Error('Synthetic workbook required');
  const ss=trackingWorkbook(), sheet=ss.getSheetByName('Tracking Summary');
  const original=sheet.getRange('B3:B4').getValues();
  try {
    const tomorrow=new Date(Date.now()+86400000);
    sheet.getRange('B3:B4').setValues([[tomorrow],[tomorrow]]);
    refreshTrackingSummary();
    if (sheet.getRange('A7').getValue()!==0) throw new Error('Empty date window failed');
  } finally {
    sheet.getRange('B3:B4').setValues(original);
    refreshTrackingSummary();
  }
  if(sheet.getRange('A7').getValue()!==5)throw new Error('Restored date window failed');
  ss.getSheetByName('Tracking V2 Lab Results').appendRow(['Date filter excludes then restores synthetic activity','PASS']);
  console.log('Date filter verified and original controls restored.');
}
