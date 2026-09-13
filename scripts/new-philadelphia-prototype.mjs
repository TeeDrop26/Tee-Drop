import assert from 'node:assert/strict';
import { additionalAreaViews } from './area-rate-presentations.mjs';

// Presentation-only prototype. No course/data/schema changes. The expected
// source text guards the hand-formatted tables against stale prices after a
// future data update: changed source text must receive a fresh content review.
const views = {
  ...additionalAreaViews,
  'td-0002': {
    expected: '2026 rates, April 1–October 1, including half cart: 18/9 holes Mon–Thu $44/$28; Friday $50/$32; weekends $60/$38, or $45/$30 after 2 PM.',
    caption: '2026 · April 1–October 1 · Half cart included',
    headers: ['When', '18 holes', '9 holes'],
    rows: [['Mon–Thu', '$44', '$28'], ['Friday', '$50', '$32'], ['Weekends', '$60', '$38'], ['Weekends after 2 PM', '$45', '$30']]
  },
  'td-0001': {
    expected: 'Published riding rates vary with demand. 18 holes: Mon–Thu $44–48; Friday $53–56, or $44–47 after noon; weekends/holidays $65–70 before noon, $57–60 noon–2 PM, and $50–55 after 2 PM. Nine holes: Mon–Thu $30; Friday after noon $30; weekends after 2 PM $32–35.',
    caption: 'Riding rates · Prices vary with demand',
    headers: ['When', '18 holes', '9 holes'],
    rows: [['Mon–Thu', '$44–48', '$30'], ['Friday before noon', '$53–56', '—'], ['Friday after noon', '$44–47', '$30'], ['Weekend / holiday before noon', '$65–70', '—'], ['Weekend / holiday noon–2 PM', '$57–60', '—'], ['Weekend / holiday after 2 PM', '$50–55', '$32–35*']],
    qualification: '*9-hole rate is listed for weekends after 2 PM; confirm holidays. — No rate listed for that time.',
    notice: 'Aeration: closed September 14–16, 2026. Reopens September 17.',
    expectedNote: "Closed September 14–16, 2026 for aeration; reopens September 17. Open Zoar's booking page to check availability."
  },
  'td-0003': {
    expected: '2026 posted: weekday 18 w/cart $45, 9 w/cart $30; weekend/holiday 18 $65; after 2 PM 18 $55; weekend 9 $40 PM only.',
    caption: '2026 posted rates',
    headers: ['Round', 'When', 'Rate'],
    rows: [['18 holes', 'Weekday · with cart', '$45'], ['9 holes', 'Weekday · with cart', '$30'], ['18 holes', 'Weekend / holiday', '$65'], ['18 holes', 'Weekend / holiday after 2 PM', '$55'], ['9 holes', 'Weekend · PM only', '$40']],
    qualification: 'Confirm weekend cart terms with the course.'
  },
  'td-0007': {
    suppressRateSource: true,
    expected: 'Official site lists weekday 9 walk $10 / ride $15 and 18 walk $16 / ride $22; weekend/holiday categories are listed, but the same page still contains 2020 membership wording, so confirm current prices.',
    caption: 'Posted weekday rates · Confirm current prices',
    headers: ['Weekday', '18 holes', '9 holes'],
    rows: [['Walking', '$16', '$10'], ['Riding', '$22', '$15']],
    qualification: 'Published rates may be outdated. Call to confirm current weekday, weekend and holiday pricing.',
    contact: 'Call (740) 922-2182 for tee-time information.',
    expectedNote: 'Call (740) 922-2182 to check booking options.'
  },
  'td-0008': {
    expected: 'The official course site does not publish current green fees and directs golfers to call for tee times. Call 740-229-7660 to confirm current pricing.',
    caption: 'Call for rates & tee times',
    message: 'Current green fees aren’t published on the official site. Call 740-229-7660 for prices and tee times.'
  },
  'td-0009': {
    expected: 'Official rates page exists but did not expose rates in search text; use booking page or call to confirm current pricing.',
    caption: 'See rate page',
    message: 'Check the official rate or booking page, or call the course, for current pricing.'
  },
  'td-0021': {
    expected: 'Official page lists weekday 18 w/cart $39, 9 $27; Friday 18 $44, 9 $32; weekend/holiday 7-1 18 $55, 9 $40; 1-4 18 $47, 9 $32; after 4 18 $33, 9 $23. Page does not clearly state the year.',
    caption: 'Posted rates · Confirm current pricing',
    headers: ['When', '18 holes', '9 holes'],
    rows: [['Weekday', '$39*', '$27'], ['Friday', '$44', '$32'], ['Weekend / holiday · 7–1', '$55', '$40'], ['Weekend / holiday · 1–4', '$47', '$32'], ['Weekend / holiday · after 4', '$33', '$23']],
    qualification: '*Weekday 18 includes a cart. Published rates may be outdated; confirm current prices, time bands and other cart terms with the course.'
  }
};

// Share the reviewed presentation with the two course-detail pilots without
// duplicating rates or changing any area-page output.
export function getReviewedRateView(course) {
  const view = views[course.id];
  assert(view, `Missing reviewed rate presentation: ${course.name}`);
  assert.equal(course.rateInfo.summary, view.expected, `${course.name}: review rate presentation after source change`);
  if (view.expectedNote) assert.equal(course.firstAvailable?.note || course.bookingNote, view.expectedNote);
  return view;
}

export function renderAreaGuide(area, { get, esc, external, action, coursePath, isPilot, areaNav }) {
  const groups = area.slug === 'new-philadelphia-oh' ? [
    { title: 'New Philadelphia & Dover Area', ids: ['td-0002'] },
    { title: 'Zoar & Bolivar', intro: 'Head north for a round at Zoar Village or Wilkshire.', ids: ['td-0001', 'td-0003'] },
    { title: 'Worth the Short Drive', intro: 'More places to play in Midvale, Uhrichsville, Sugarcreek and East Sparta.', ids: ['td-0007', 'td-0008', 'td-0009', 'td-0021'] }
  ] : area.groups.map((g, i) => ({
    title: area.slug === 'akron-oh' && i === 0 ? 'Akron Area' : g.title.replace(/ and /g, ' & '),
    intro: area.slug === 'akron-oh'
      ? ['', 'More places to play in Green and Mogadore.', 'Head north for a round in Cuyahoga Falls or Stow.'][i]
      : ['Start with these Canton options.', 'Find a round around North Canton, Uniontown or Hartville.', 'Explore courses east and northeast of Canton.', 'More options around Massillon, North Lawrence and Canal Fulton.', 'Head south to Spring Valley in East Sparta.'][i],
    ids: g.courses
  }));
  const copy = {
    'new-philadelphia-oh': {
      kicker: 'Tuscarawas County & nearby', title: 'New Philadelphia & Dover',
      intro: 'Looking for somewhere to play around New Philadelphia and Dover? Explore these public courses around Tuscarawas County, plus Spring Valley in nearby East Sparta. Compare posted rates and follow the course’s own link to book or get in touch.'
    },
    'canton-oh': {
      kicker: 'Canton, Stark County & nearby', title: 'Canton',
      intro: 'Looking for your next round around Canton? Compare public courses in Canton and nearby towns, from North Canton and Hartville to Massillon and East Sparta. Check posted prices, pick a course and follow its direct link to book or get in touch.'
    },
    'akron-oh': {
      kicker: 'Akron, Summit County & nearby', title: 'Akron',
      intro: 'Find somewhere to play around Akron, with more options in Green, Mogadore, Cuyahoga Falls and Stow. Compare walking and riding rates, check the time restrictions and head straight to the course’s booking or information page.'
    }
  }[area.slug];
  assert.deepEqual(groups.flatMap(g => g.ids), area.groups.flatMap(g => g.courses), 'Prototype must retain the same courses and ItemList order');
  function card(id) {
    const c = get(id), v = views[id];
    assert.equal(c.rateInfo.summary, v.expected, `${c.name}: review compact rate presentation after source change`);
    if (v.expectedNote) assert.equal(c.firstAvailable?.note || c.bookingNote, v.expectedNote, `${c.name}: review course notice`);
    const date = new Date(c.rateInfo.checked + ' 12:00:00 UTC');
    const dateText = c.rateInfo.checked.replace(/^Sep /, 'Sept. ').replace(/^Aug /, 'Aug. ');
    const table = v.rows ? `<table class="np-rates"><caption>${esc(v.caption)}</caption><thead><tr>${v.headers.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${v.rows.map(row => `<tr><th scope="row">${esc(row[0])}</th>${row.slice(1).map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : `<h4>${esc(v.caption)}</h4><p class="np-message">${esc(v.message)}</p>`;
    return `<article class="np-card" id="${c.id}" aria-labelledby="name-${c.id}">
      <header class="np-identity"><p class="course-meta">${esc(c.city)}</p><h3 id="name-${c.id}">${isPilot(c) ? `<a href="${coursePath(c)}">${esc(c.name)}</a>` : esc(c.name)}</h3></header>
      <div class="np-rate-content">${v.notice ? `<p class="np-notice">${esc(v.notice)}</p>` : ''}${table}${v.qualification ? `<p class="np-qualification">${esc(v.qualification)}</p>` : ''}${v.contact ? `<p class="np-contact">${esc(v.contact)}</p>` : ''}</div>
      <div class="np-actions">${action(c)}${isPilot(c) ? `<a class="seo-detail" href="${coursePath(c)}">Course Details<span class="visually-hidden">: ${esc(c.name)}</span></a>` : ''}</div>
      <p class="np-review">Rates reviewed <time datetime="${date.toISOString().slice(0, 10)}">${esc(dateText)}</time>${v.suppressRateSource ? '' : `<span aria-hidden="true"> · </span>${external(c.rateInfo.sourceUrl, 'View rate source')}`}</p>
    </article>`;
  }
  return `<div class="np-guide">
    <section class="seo-hero"><p class="section-kicker">Tee Drop · ${esc(copy.kicker)}</p><h1>Golf Courses Near<br>${esc(copy.title)}</h1><p class="seo-lead">${esc(copy.intro)}</p></section>
    <p class="np-intro-note">${groups.flatMap(g => g.ids).length} places to plan your next round. Check the rate notes below and confirm current pricing with the course.</p>
    ${groups.map((g, i) => `<section class="np-group" id="group-${i + 1}" aria-labelledby="heading-${i + 1}"><div class="np-group-heading"><h2 id="heading-${i + 1}">${esc(g.title)}</h2>${g.intro ? `<p>${esc(g.intro)}</p>` : ''}</div><div class="np-courses">${g.ids.map(card).join('\n')}</div></section>`).join('\n')}
    ${areaNav(area)}
  </div>`;
}
