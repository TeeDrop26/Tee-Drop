import assert from 'node:assert/strict';
import { rateSourceAllowed } from './source-publication.mjs';
import { getReviewedRateView } from './new-philadelphia-prototype.mjs';

// Presentation-only additions for the remaining approved pilots. Source guards
// prevent a future rate update from silently leaving these displays stale.
const courseViews = {
  'td-0033': {
    expected: 'Official page lists Monday-Thursday 18 riding $40 and 9 riding $26; Friday-Sunday 18 riding $46 and 9 riding $30. Confirm current pricing with the course.',
    status: 'undated', caption: 'Posted Riding Rates',
    headers: ['When', '18 holes', '9 holes'],
    rows: [['Mon–Thu', '$40', '$26'], ['Fri–Sun', '$46', '$30']],
    qualification: 'Published rates may be outdated. Confirm current pricing with the course.'
  },
  'td-0099': {
    expected: '2026 daytime 9-hole fees: Mahoning County residents $8; nonresidents $9; seniors and juniors $7.',
    status: 'posted', caption: '2026 Daytime Rates · 9 Holes',
    headers: ['Golfer', 'Rate'],
    rows: [['Mahoning County resident', '$8'], ['Nonresident', '$9'], ['Senior or junior', '$7']]
  },
  'td-0079': {
    expected: 'The official rate page lists 9 holes anytime at $20, or $23 when paying by card. Confirm cart inclusion. Other published rates require confirmation of hole count and cart terms. Call 740-452-1860; the rate page is undated.',
    status: 'rate-page', statusLabel: 'See rate page', caption: '9 Holes · Anytime',
    headers: ['Payment', 'Rate'],
    rows: [['Listed price', '$20'], ['Paying by card', '$23']],
    qualification: 'Confirm cart inclusion. Published rates may be outdated; other listed prices require confirmation of hole count and cart terms. Call 740-452-1860.'
  },
  'td-0046': {
    expected: 'The course uses dynamic pricing; online rates fluctuate with weather, competition, local events, and booking timing. Check the official booking page for the current rate.',
    status: 'booking', statusLabel: 'See booking page',
    message: 'Online prices change with weather, competition, local events and when you book. Use the course’s booking chooser for current rates and availability.'
  },
  'td-0069': {
    expected: 'Temporarily closed until further notice following July 5, 2026 storm damage. Check the official course page for reopening updates; rates require reconfirmation before play resumes.',
    status: 'closed'
  }
};

// Preserve the existing shell, hero layout, booking panel and metadata/JSON-LD.
export function refineCourseDetail(course, body, { esc, external }) {
  const view = courseViews[course.id] || getReviewedRateView(course);
  assert.equal(course.rateInfo.summary, view.expected, `${course.name}: review formatted rates after source change`);
  if (view.status) assert.equal(course.rateInfo.status, view.status);
  const closed = course.rateInfo.status === 'closed';
  const oak = course.id === 'td-0002';
  const zoar = course.id === 'td-0001';
  const caption = oak ? '2026 Riding Rates' : zoar ? 'Riding Rates' : view.caption;
  const qualification = oak
    ? 'Includes half cart · April 1–October 1'
    : zoar ? 'Prices vary with demand. ' + view.qualification : view.qualification;
  const table = view.rows
    ? `<table class="course-rate-table"><caption>${esc(caption)}</caption><thead><tr>${view.headers.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${view.rows.map(row => `<tr><th scope="row">${esc(row[0])}</th>${row.slice(1).map(value => `<td>${esc(value)}</td>`).join('')}</tr>`).join('')}</tbody></table>${qualification ? `<p class="course-rate-qualification">${esc(qualification)}</p>` : ''}`
    : closed ? `<p class="rate-info">${esc(course.rateInfo.summary)}</p>`
      : `<p class="course-rate-qualification">${esc(view.message)}</p>`;
  const date = new Date(course.rateInfo.checked + ' 12:00:00 UTC');
  const dateText = course.rateInfo.checked.replace(/^Sep /, 'Sept. ').replace(/^Aug /, 'Aug. ');
  const review = `<p class="seo-review">${closed ? 'Status reviewed' : 'Rates reviewed'} <time datetime="${date.toISOString().slice(0, 10)}">${esc(dateText)}</time>${rateSourceAllowed(course) ? ` · ${external(course.rateInfo.sourceUrl, closed ? 'View closure updates' : 'View rate source')}` : ''}</p>`;
  function replaceOnce(pattern, replacement) {
    const matches = body.match(new RegExp(pattern.source, 'g'));
    assert.equal(matches?.length, 1, `Course template insertion changed: ${pattern}`);
    body = body.replace(pattern, () => replacement);
  }
  const descriptor = oak || zoar ? `Public golf · ${course.area}`
    : `${course.courseType === 'par3' ? 'Public par 3 golf' : 'Public golf'} · ${course.city.replace(/, OH$/, ', Ohio')}`;
  replaceOnce(/Independent course information from Tee Drop/, esc(descriptor));
  replaceOnce(/<p class="seo-status[^"]*">[\s\S]*?<\/p>/,
    view.statusLabel ? `<p class="seo-status">${esc(view.statusLabel)}</p>` : '');
  replaceOnce(/<p class="rate-info seo-full-rate">[\s\S]*?<\/p>/, (view.detailNotice ? `<div class="seo-notice"><h3>Current course layout</h3><p>${esc(view.detailNotice)}</p></div>` : '') + table);
  replaceOnce(/<p class="seo-review">[\s\S]*?<\/p>/, review);
  replaceOnce(/<section class="seo-facts seo-section">[\s\S]*?<\/section>/, '');
  replaceOnce(/Nearby Tee Drop courses/, 'More courses nearby');
  replaceOnce(/Nearby suggestions use the directory’s recorded coordinates, not driving times\. Check each course’s own information before making plans\./,
    oak ? 'More public courses around New Philadelphia and Tuscarawas County.' : zoar ? 'More public courses around Zoar and the surrounding towns.'
      : `More public courses around ${esc(course.city.replace(/, OH$/, ''))} and the surrounding towns.`);
  return body;
}
