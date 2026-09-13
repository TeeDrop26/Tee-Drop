import fs from 'node:fs';
import assert from 'node:assert/strict';
const policy = JSON.parse(fs.readFileSync(new URL('../seo/source-publication.json', import.meta.url), 'utf8'));
const protectedIds = ['td-0007', 'td-0073', 'td-0035'];
export function rateSourceAllowed(course) {
  const entry = policy[course.id];
  assert(entry, course.id + ': explicitly review source publication before adding a page');
  assert(['publish', 'suppress'].includes(entry.decision));
  if (protectedIds.includes(course.id)) assert.equal(entry.decision, 'suppress', course.id + ': protected source requires a separate reviewed policy change');
  assert.equal(course.rateInfo.sourceUrl, entry.expectedUrl, course.id + ': source destination changed; review publication policy');
  return entry.decision === 'publish';
}
