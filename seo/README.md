# Phase 1 static guides

These pages supplement the existing directory. `app.js`, its 124 records, approved
rates, destinations, featured rotation and tracking remain the source of truth.
No framework, runtime dependency, route rewrite or deployment setting is added.

## Rebuild and check

From the repository root, with Node.js 20 or newer:

```sh
node scripts/build-seo.mjs
node scripts/build-seo.mjs --check
node scripts/serve-local.mjs
```

Open `http://127.0.0.1:8891/`. The preview server serves files and directory indexes,
redirects a real directory to its trailing slash and returns 404 for missing URLs.
It has no SPA fallback. Stop it with Ctrl+C. This is a local preview, not a Vercel
deployment or a guarantee about project-level hosting settings.

Generated HTML is checked in with normal static assets when a release is approved.
There is no production runtime build requirement. Run the generator after any
course-data change and run `--check` before a future release; otherwise static
pages can become stale. The generator does not write `app.js` or `styles.css`.

## Identity and editorial scope

- `course-registry.json` is a persistent registry for **all 124** directory entries.
  IDs are assigned once, not regenerated from array positions. Keep IDs and slugs
  stable when display names change. Append new IDs; do not reuse retired ones.
- Slugs include the recorded city and state to distinguish ambiguous names.
  Matching uses the exact name **and city**. Duplicate identities/slugs/IDs fail
  the build; resolve a same-name/same-city case manually with a distinguishing
  slug and explicit identity mapping, never by selecting the first match.
- `phase-one.json` selects exactly eight IDs, three area guides and curated town
  groups. Registry membership does not publish a page. No other course URL exists.
- Prices, review dates, status, booking links and qualifications come from `app.js`.
  Undated-source summaries are shown in full so the warning is not lost through
  a shorter `publicSummary`. Other records use `publicSummary` where present.
- Facts are limited to explicitly structured course type and hole count. Notes
  remain prose; addresses, phone numbers and amenities are not inferred from them.
- Nearby suggestions use the three closest stored coordinate pairs within 25
  straight-line miles. They are not recommendations or driving-time estimates.
- Keep closure notes visible. Mill Creek gets Updates / Info, never a booking
  invitation. Zoar's existing aeration notice and Teesnap destination stay intact.

## Dates and sitemap

There are 14 entries: home, About, Indoor, three area pages and eight course pages.
`contentModified` and home `lastmod` reflect the final Phase 1 revision on
September 13, 2026. Stored rate-review dates are unchanged. About/Indoor dates come from their last content commits on
August 10, 2026. Do not advance dates on a no-op rebuild. For future significant
guide content updates, explicitly update the editorial date; use per-page dates
when updates no longer apply across the full pilot set.

## Tracking decision awaiting review

As of September 13, all three area guides and all eight course-detail pages load
only JSON-LD scripts, which do not execute tracking. They record no page-view
events, including direct/search arrivals, reloads, or navigation between guides.
Their primary View Booking, Call / Info and Updates / Info actions, rate-source
links, and external nearby-course actions produce no click events. Internal course
details, area links, breadcrumbs, header/footer links and directory links are also
untracked. Homepage discovery links do not record navigation clicks either.

Returning to the homepage can trigger its existing outdoor_page_view, subject to
its session/traffic-source deduplication. Visiting Indoor can trigger its existing
indoor tracking. Neither reconstructs the preceding guide visit or click. Provider
booking completions are not measured by this repository. This describes Tee Drop's
checked-in tracking only, not any independent hosting logs or provider analytics.

The existing homepage handler requires .book-link[data-course-name] and attaches
course name, city, source and booking type. Static anchors have no such tracking
attributes or handler; nearby and rate-source links also use other CSS classes.
Do not load app.js on guides: its initialization expects homepage DOM elements.

A separately approved implementation would need a small shared tracking module
that works without the homepage DOM, included by the static shell, plus explicit
page identity and event attributes on the intended anchors. Define guide page-view
events and deduplication, stable course IDs/slugs, area identity, source page,
traffic attribution, and action type. Proposed booking source values are
course detail page and area page; distinguish nearby placement, information and
closure actions from bookings. Rate-source and internal-navigation events need
separate definitions. Review the existing Apps Script receiver, sheet columns and
reports to ensure they accept and classify these events; update them if needed.
Preserve existing homepage/Indoor contracts, preview guards, and safe navigation,
then verify one intended event per action without duplicate counting. Booking
completion attribution would additionally require provider support.

No tracking implementation or behavior change is included. This remains a separate
approval decision; this release retains the documented measurement gap.

## Remaining discovery work

Home retains its ten-card interactive initial display. Ordinary HTML links in the
new home guide section expose all three areas and all eight course pilots even
without JavaScript. Area guides show 28 distinct existing records (Spring Valley
appears in two guides). A total of 33 unique records have a full static rate record
across the area/course pages. The other 91 retain the current JavaScript directory
experience; future useful guides/course pages can expand coverage after review.

Course pages with no relevant pilot parent link to the full directory rather than
inventing a regional association. Their nearby links can target existing course
pages or approved external course destinations, never nonexistent future pages.

## Structured data

Each area has CollectionPage, ItemList and BreadcrumbList. Each course has WebPage,
GolfCourse and BreadcrumbList. Tee Drop is only the WebPage/CollectionPage publisher.
No prices, offers, reviews, ratings, opening hours, reservations or inferred
addresses/phones are added to schema. Local validation checks JSON syntax, graph
relationships, breadcrumb sequence, visible names and list counts. Google rich
result eligibility and indexing are not guaranteed by those checks.
