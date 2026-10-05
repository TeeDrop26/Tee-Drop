import fs from 'node:fs';
import { journey, receiver } from './tracking-fixtures.mjs';
const root = new URL('../',import.meta.url);
const file = new URL('tracking/lab/journey.json',root);
if(!fs.existsSync(file))fs.writeFileSync(file,JSON.stringify(journey(),null,2)+'\n');
const events=JSON.parse(fs.readFileSync(file,'utf8'));
const r=receiver();for(const e of events){if(!r.post(e).ok)throw Error('Invalid fixture');}
// The existing lab project is standalone; production is workbook-bound.
// Only the lab bundle replaces workbook access, pinned to the synthetic ID.
const source=['tracking/backend/Metadata.gs','tracking/backend/Code.gs','tracking/backend/Summary.gs','tracking/lab/Lab.gs'].map(f=>fs.readFileSync(new URL(f,root),'utf8')).join('\n')
  .replaceAll('SpreadsheetApp.getActiveSpreadsheet()', 'SpreadsheetApp.openById(SYNTHETIC_WORKBOOK_ID)');
fs.writeFileSync(new URL('tracking/lab/review-bundle.gs.txt',root),source+'\nconst LAB_JOURNEY = '+JSON.stringify(events)+';\n');
console.log('Prepared synthetic Apps Script bundle; no upload or deployment.');
