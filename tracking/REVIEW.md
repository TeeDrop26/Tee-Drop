# Tracking V2 — owner review

October 5, 2026. Implemented locally on `codex/tracking-analytics-audit`, based on freshly verified `origin/main` at `b110c191ab76bd996cfc734770c861799f9de6f8`. No commit, push, frontend deployment, Apps Script deployment, or production event probe. The protected checkout was not accessed.

## What changed

- One dependency-free tracker covers home, Indoor, About, 13 guides and 64 course pages. It replaces the homepage/Indoor emitters, carries short-session entry attribution, sends canonical paths and IDs only, and records the three approved event types.
- The shared generator produces page identity metadata and course/action attributes automatically. Future page publication requires regenerating and releasing both browser and receiver metadata, not writing page-specific handlers.
- The receiver rejects unknown/malformed events without writing, validates the new contract, deduplicates event IDs under a lock, and eliminates per-event date formatting. Historical tabs remain isolated.
- The production workbook has additive Events headers, Tracking Lookup and an explicitly not-live Tracking Summary scaffold. It contains no synthetic/new event rows. The production Apps Script deployment and old tabs/Dashboard were not changed.
- The existing synthetic lab project contains the reviewed receiver and a populated working summary. Its standalone workbook adapter is pinned to the synthetic workbook. The prior lab source was backed up. No lab deployment or trigger was created.

## Validation results

| Check | Result |
|---|---|
| Local tracking and SEO regression tests | 14 passed |
| Actual Google receiver acceptance | 27 passed, including all four legacy routes against the existing typed visit columns |
| Actual Google date-filter check | Passed; excludes activity then restores original dates/totals |
| Browser journey | 12 events: 5 page views, 3 exploration clicks, 4 outbound clicks; one session |
| Browser failure simulation | All 8 tracking sends rejected locally; About → homepage → guide → course → booking navigation still worked |
| Duplicate delivery | Same event ID persisted once |
| Privacy/validation | Unknown fields, invalid paths, unsupported events and invalid IDs rejected |
| Site controls | Homepage and Indoor search still render expected results; search text is not collected |

The browser journey followed home → New Philadelphia/Dover guide → Zoar course → booking and rate source, then Indoor info and About. Target identities and action types matched the actual links. A separate synthetic Google-entry fixture verified attribution preservation; the manually opened browser journey correctly recorded `direct_or_unknown`.

No booking completion or phone call was performed. Actual provider links were opened only to verify normal outbound navigation.

## What the summary shows

[Open the synthetic Tracking Summary](https://docs.google.com/spreadsheets/d/1jLx34074y7NcqKThbLzhjY1QS6Jbu1dFPma_5oZpJ1s/edit#gid=1360705686).

The fixed synthetic fixture produces **5 views, 4 useful views (80%), 4 outbound actions, 0 unmatched actions**. It shows the guide → Zoar course edge, separates booking/rate actions, identifies each originating page, and associates downstream activity with a Google-entry session landing on `/`.

Sections: page use/useful-view rate; guide-to-course links; course/facility action counts; originating-page/action counts; entry-source/landing sessions with useful/outbound activity. Multiple actions on one page view count once for usefulness. The report uses inclusive Eastern dates and displays its refresh timestamp. It is a refreshed snapshot, not a continuously updating dashboard.

[Prepared production summary](https://docs.google.com/spreadsheets/d/10pd71gIeCzvcB0lLKz5rqaWN-2vKJJbxJvez5Qm-L6k/edit#gid=200610053) is intentionally an inactive scaffold until release. Historical visits are not combined with new page views.

## Files and status

See [CHANGED-FILES.txt](CHANGED-FILES.txt) for the exact inventory. Main changes are `tracking.js`, configuration/generated metadata, the three root HTML pages, `app.js`, `indoor.js`, the shared SEO generator and two rendering helpers, generated guide/course HTML, backend source, tests and tracking documentation. Generated preview/build artifacts are ignored.

All implementation changes are unstaged and uncommitted in the isolated worktree. No changes were made to the protected checkout, and the branch HEAD remains the inspected main commit. The worktree is intentionally dirty with this implementation; it is not being described as Git-clean.

## Remaining decisions and release limits

- **Release approval is still required.** Production receiver code is not patched live. Verify its current deployment, install the tested backend/setup, then activate and release the frontend together. Never enable new events against the old receiver.
- **Campaign map is empty.** No arbitrary query parameters are collected. Approve specific campaign labels only if wanted; ordinary referrer attribution works without them.
- **No automatic retention deletion.** Decide whether to adopt the proposed 90-day raw retention policy later.
- Delivery is best effort. This does not identify unique people, reliably remove all bots, measure completed bookings, or join devices. New tabs and blocked storage may split sessions. Google organic classification is inferred from a recognized referrer.
- At the current scale, Sheets is sufficient for the demonstrated workflow. Deduplication/summary scans grow with retained data; review quota and refresh performance as usage grows.

Detailed contract, test commands, and the staged release procedure are in [README.md](README.md). Stopped for owner review.
