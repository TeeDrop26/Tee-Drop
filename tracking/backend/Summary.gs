// The summary is a timestamped snapshot refreshed by menu or by changing dates.
function summarizeTracking(rows, start, end) {
  const events = rows.filter(r => r.receivedAt >= start && r.receivedAt < end);
  const views = new Map(), useful = new Set(), outboundSessions = new Set();
  const guideCounts = {}, courseCounts = {}, sourceCounts = {};
  for (const e of events) {
    if (e.eventType === 'page_view') views.set(e.pageViewId, e);
    else useful.add(e.pageViewId);
    if (e.eventType === 'navigation_click' && e.pageType === 'area' && e.targetCourseId) {
      const key = JSON.stringify([e.page, e.targetCourseId]); guideCounts[key] = (guideCounts[key] || 0) + 1;
    }
    if (e.eventType === 'outbound_click') {
      outboundSessions.add(e.sessionId);
      const key = e.targetCourseId || e.targetFacilityId;
      const c = courseCounts[key] || (courseCounts[key] = { actions: {}, sessions: new Set() });
      c.actions[e.actionType] = (c.actions[e.actionType] || 0) + 1; c.sessions.add(e.sessionId);
      const source = JSON.stringify([e.page, e.actionType]); sourceCounts[source] = (sourceCounts[source] || 0) + 1;
    }
  }
  const pageCounts = {}, acquisition = {};
  for (const e of views.values()) {
    const p = pageCounts[e.page] || (pageCounts[e.page] = { views: 0, useful: 0 });
    p.views++; if (useful.has(e.pageViewId)) p.useful++;
    const key = JSON.stringify([e.entrySource, e.entryMedium, e.campaign, e.entryPage]);
    const a = acquisition[key] || (acquisition[key] = { sessions: new Set(), useful: new Set(), outbound: new Set() });
    a.sessions.add(e.sessionId);
    if (useful.has(e.pageViewId)) a.useful.add(e.sessionId);
    if (outboundSessions.has(e.sessionId)) a.outbound.add(e.sessionId);
  }
  const label = id => TRACKING_METADATA.courses[id] || TRACKING_METADATA.facilities[id] || id;
  return {
    views: views.size, useful: [...views.keys()].filter(id => useful.has(id)).length,
    outbound: events.filter(e => e.eventType === 'outbound_click').length,
    unmatchedActions: events.filter(e => e.eventType !== 'page_view' && !views.has(e.pageViewId)).length,
    pages: Object.entries(pageCounts).map(([page, p]) => [page, TRACKING_METADATA.pages[page].type, p.views, p.useful, p.useful / p.views]).sort((a,b) => b[2]-a[2]),
    guides: Object.entries(guideCounts).map(([key, count]) => { const [page,id] = JSON.parse(key); return [page,id,label(id),count]; }).sort((a,b) => b[3]-a[3]),
    courses: Object.entries(courseCounts).map(([id,c]) => [id,label(id),...ACTIONS.map(a => c.actions[a] || 0),c.sessions.size]).sort((a,b) => b.slice(2,8).reduce((x,y)=>x+y,0)-a.slice(2,8).reduce((x,y)=>x+y,0)),
    sourcePages: Object.entries(sourceCounts).map(([key,count]) => [...JSON.parse(key),count]).sort((a,b)=>b[2]-a[2]),
    acquisition: Object.entries(acquisition).map(([key,a]) => [...JSON.parse(key),a.sessions.size,a.useful.size,a.outbound.size,a.useful.size/a.sessions.size]).sort((a,b)=>b[4]-a[4])
  };
}

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Tee Drop Tracking').addItem('Refresh Tracking Summary', 'refreshTrackingSummary').addToUi();
}

function onEdit(e) {
  if (e && e.range.getSheet().getName() === 'Tracking Summary' && e.range.getRow() <= 4 && e.range.getLastRow() >= 3 && e.range.getColumn() <= 2 && e.range.getLastColumn() >= 2) refreshTrackingSummary();
}

function setupTrackingV2() {
  const ss = trackingWorkbook();
  // Explicit owner-run setup only; never called from doPost. Old tabs are untouched.
  ss.setSpreadsheetTimeZone('America/New_York');
  let events = ss.getSheetByName('Events');
  if (!events) {
    events = ss.insertSheet('Events');
    events.getRange(1,1,1,EVENT_COLUMNS.length).setValues([EVENT_COLUMNS]);
    events.setFrozenRows(1);
    events.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm:ss');
    events.getRange(1,1,1,EVENT_COLUMNS.length).setBackground('#164832').setFontColor('#ffffff').setFontWeight('bold');
  } else requireHeaders(events, EVENT_COLUMNS);
  events.setColumnWidths(1, EVENT_COLUMNS.length, 170);
  events.setColumnWidth(1, 190);
  events.getRange(1,1,events.getMaxRows(),EVENT_COLUMNS.length).setWrap(true);
  let lookup = ss.getSheetByName('Tracking Lookup');
  if (!lookup) lookup = ss.insertSheet('Tracking Lookup');
  else if (lookup.getRange('A1').getValue() !== 'Type') throw new Error('Unexpected lookup sheet');
  const rows = [['Type','ID / Path','Name','Course ID'],
    ...Object.entries(TRACKING_METADATA.pages).map(([p,v])=>[v.type,p,v.label,v.courseId||'']),
    ...Object.entries(TRACKING_METADATA.courses).map(([id,name])=>['course identity',id,name,id]),
    ...Object.entries(TRACKING_METADATA.facilities).map(([id,name])=>['indoor identity',id,name,''])];
  lookup.clearContents(); lookup.getRange(1,1,rows.length,4).setValues(rows); lookup.setFrozenRows(1); lookup.autoResizeColumns(1,4);
  let summary = ss.getSheetByName('Tracking Summary');
  if (!summary) {
    summary = ss.insertSheet('Tracking Summary');
    summary.getRange('A1').setValue('Tee Drop Tracking Summary');
    summary.getRange('A3:A4').setValues([['From (Eastern date)'],['Through (Eastern date)']]);
    const today = new Date(); summary.getRange('B3:B4').setValues([[new Date(today.getTime()-29*86400000)],[today]]).setNumberFormat('yyyy-mm-dd').setBackground('#fff1c2');
  } else if (summary.getRange('A1').getValue() !== 'Tee Drop Tracking Summary') throw new Error('Unexpected summary sheet');
  summary.getRange('A3:A4').setValues([['From (Eastern date)'],['Through (Eastern date)']]);
  const controls = summary.getRange('B3:B4').getValues();
  if (controls[0][0] === '' && controls[1][0] === '') {
    const today = new Date();
    summary.getRange('B3:B4').setValues([[new Date(today.getTime()-29*86400000)],[today]]).setNumberFormat('yyyy-mm-dd').setBackground('#fff1c2');
  }
  refreshTrackingSummary();
}

function refreshTrackingSummary() {
  const ss = trackingWorkbook(), sheet = ss.getSheetByName('Tracking Summary'), source = ss.getSheetByName('Events');
  requireHeaders(source, EVENT_COLUMNS);
  const dates = sheet.getRange('B3:B4').getValues().flat();
  if (dates.some(d => !(d instanceof Date) || isNaN(d))) {
    sheet.getRange('D4').setValue('Invalid dates. Results below are the previous snapshot.');
    throw new Error('Choose valid From and Through dates');
  }
  // Parse Eastern dates explicitly, including DST, independently of project timezone.
  const dateString = d => Utilities.formatDate(d, 'America/New_York', 'yyyy-MM-dd');
  const start = Utilities.parseDate(dateString(dates[0]), 'America/New_York', 'yyyy-MM-dd');
  const next = new Date(dateString(dates[1])+'T12:00:00Z'); next.setUTCDate(next.getUTCDate()+1);
  const end = Utilities.parseDate(next.toISOString().slice(0,10), 'America/New_York', 'yyyy-MM-dd');
  if (end <= start) {
    sheet.getRange('D4').setValue('Invalid date order. Results below are the previous snapshot.');
    throw new Error('Through date must be on or after From date');
  }
  const raw = source.getLastRow() > 1 ? source.getRange(2,1,source.getLastRow()-1,EVENT_COLUMNS.length).getValues() : [];
  const rows = raw.map(row=>Object.fromEntries(EVENT_COLUMNS.map((k,i)=>[k,row[i]])));
  const report = summarizeTracking(rows,start,end);
  sheet.getRange(6,1,Math.max(1,sheet.getMaxRows()-5),9).clearContent().clearFormat();
  sheet.getRange('A5:I5').clearContent();
  sheet.getRange('A1:I1').merge().setBackground('#164832').setFontColor('#ffffff').setFontSize(18).setFontWeight('bold');
  sheet.getRange('A2:I2').merge(); sheet.getRange('D4:I4').merge();
  sheet.getRange('A9:I9').merge(); sheet.getRange('A10:I10').merge();
  sheet.getRange('A2').setValue('New tracking only. Historical tabs are excluded. Dates include the whole Eastern day.');
  sheet.getRange('D3').setValue('Last refreshed'); sheet.getRange('E3').setValue(new Date()).setNumberFormat('yyyy-mm-dd hh:mm:ss');
  sheet.getRange('D4').setValue(ss.getId() === SYNTHETIC_WORKBOOK_ID ? 'Synthetic lab: run refreshTrackingSummary in the test Apps Script project after changing dates.' : 'Refresh using the Tee Drop Tracking menu or change the dates.');
  sheet.getRange('A6:F7').setValues([
    ['Page views','Useful page views','Useful-activity rate','Outbound actions','Unmatched actions',''],
    [report.views,report.useful,report.views ? report.useful/report.views : 0,report.outbound,report.unmatchedActions,'']]);
  sheet.getRange('C7').setNumberFormat('0.0%');
  sheet.getRange('A9').setValue('Useful = a viewed page with at least one navigation or outbound action in this date window.');
  sheet.getRange('A10').setValue('Unmatched actions lack a recorded page view in this window. Sessions are tab visits, not people.');
  let cursor=12;
  function section(title,headers,values,percentColumn) {
    const required = cursor+values.length+4;
    if (required > sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(),required-sheet.getMaxRows());
    sheet.getRange(cursor++,1).setValue(title).setFontWeight('bold').setFontSize(13);
    sheet.getRange(cursor++,1,1,headers.length).setValues([headers]).setBackground('#e5eee8').setFontWeight('bold');
    if (values.length) {
      sheet.getRange(cursor,1,values.length,headers.length).setValues(values);
      if(percentColumn) sheet.getRange(cursor,percentColumn,values.length,1).setNumberFormat('0.0%');
    } else sheet.getRange(cursor,1).setValue('No activity in this period');
    cursor += Math.max(1,values.length)+3;
  }
  section('Pages and useful activity',['Page','Type','Views','Useful views','Useful rate'],report.pages,5);
  section('Area guides leading to course pages',['Area guide','Course ID','Course','Clicks'],report.guides);
  section('Courses and indoor facilities generating outbound actions',['ID','Name',...ACTIONS,'Sessions with outbound'],report.courses);
  section('Pages generating outbound actions',['Source page','Action','Clicks'],report.sourcePages);
  section('Entry source and landing page — sessions seen in this period',['Source','Medium','Campaign','Landing page','Sessions','Useful sessions','Outbound sessions','Useful session rate'],report.acquisition,8);
  sheet.setFrozenRows(4); sheet.setColumnWidth(1,380); sheet.setColumnWidth(2,250); sheet.setColumnWidths(3,7,145);
  sheet.getRange(1,1,cursor,9).setVerticalAlignment('top').setWrap(true);
  SpreadsheetApp.flush();
}
