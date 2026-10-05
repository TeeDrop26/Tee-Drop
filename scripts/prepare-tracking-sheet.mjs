// Produces additive Sheet setup requests for review; never calls Google APIs.
import fs from 'node:fs';
import { metadata, receiver } from './tracking-fixtures.mjs';
const ids={Events:200610051,'Tracking Lookup':200610052,'Tracking Summary':200610053};
const rows={
  Events:[Array.from(receiver().sandbox.columns)],
  'Tracking Lookup':[['Type','ID / Path','Name','Course ID'],...Object.entries(metadata.pages).map(([p,v])=>[v.type,p,v.label,v.courseId||'']),...Object.entries(metadata.courses).map(([id,name])=>['course identity',id,name,id]),...Object.entries(metadata.facilities).map(([id,name])=>['indoor identity',id,name,''])],
  'Tracking Summary':[['Tee Drop Tracking Summary'],['Prepared for review — Tracking V2 is not live. Historical tabs remain separate.'],[],['The tested receiver will populate this summary after an approved release.'],['Review the synthetic demonstration:'],['https://docs.google.com/spreadsheets/d/1jLx34074y7NcqKThbLzhjY1QS6Jbu1dFPma_5oZpJ1s/edit#gid=1360705686']]
};
const requests=[];
for(const [title,sheetId] of Object.entries(ids)) {
  requests.push({addSheet:{properties:{sheetId,title,gridProperties:{rowCount:1000,columnCount:26,frozenRowCount:1}}}});
  const width=Math.max(...rows[title].map(r=>r.length));
  requests.push({updateCells:{range:{sheetId,startRowIndex:0,endRowIndex:rows[title].length,startColumnIndex:0,endColumnIndex:width},rows:rows[title].map(row=>({values:Array.from({length:width},(_,i)=>({userEnteredValue:{stringValue:row[i]||''}}))})),fields:'userEnteredValue'}});
  requests.push({repeatCell:{range:{sheetId,startRowIndex:0,endRowIndex:1,startColumnIndex:0,endColumnIndex:width},cell:{userEnteredFormat:{backgroundColor:{red:.9,green:.94,blue:.91},textFormat:{bold:true},wrapStrategy:'WRAP'}},fields:'userEnteredFormat'}});
}
requests.push({repeatCell:{range:{sheetId:ids.Events,startRowIndex:1,startColumnIndex:0,endColumnIndex:1},cell:{userEnteredFormat:{numberFormat:{type:'DATE_TIME',pattern:'yyyy-mm-dd hh:mm:ss'}}},fields:'userEnteredFormat.numberFormat'}});
requests.push({autoResizeDimensions:{dimensions:{sheetId:ids['Tracking Lookup'],dimension:'COLUMNS',startIndex:0,endIndex:4}}});
requests.push({updateDimensionProperties:{range:{sheetId:ids['Tracking Summary'],dimension:'COLUMNS',startIndex:0,endIndex:1},properties:{pixelSize:850},fields:'pixelSize'}});
fs.writeFileSync(new URL('../tracking/lab/production-sheet-setup.json',import.meta.url),JSON.stringify({requests},null,2)+'\n');
console.log('Prepared additive setup: Events, Tracking Lookup, Tracking Summary.');
