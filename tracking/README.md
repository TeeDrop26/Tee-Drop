Release approved October 5, 2026. Receiver version 9 and production setup are installed; the configuration is enabled for the verified existing endpoint. The pre-release descriptions below document the validated staging procedure; see RELEASE.md for release state.

# Tracking V2

The site uses one shared collector for `page_view`, `navigation_click` and `outbound_click`. `tracking-config.js` is deliberately disabled with an empty endpoint. No new frontend event can reach production until an approved release changes that configuration. The old homepage and Indoor emitters have been removed from this branch; do not deploy the branch with tracking disabled unless a tracking pause is intended.

## Contract and attribution

All events contain `schemaVersion: 1`, `eventType`, UUID `eventId`, short-lived UUID `sessionId`, UUID `pageViewId`, increasing `eventSequence`, canonical `page`, `pageType`, `entryPage`, `entrySource`, `entryMedium`, approved `campaign` or empty string, and known internal `previousPage` or empty string. Course pages also contain `pageCourseId`.

Navigation adds canonical `targetPage`, optional `targetCourseId`, and `placement`. Outbound adds exactly one of `targetCourseId` / `targetFacilityId`, `actionType`, and `placement`. Outbound URLs are not sent. Actions are `booking`, `course_info`, `rate_source`, `course_updates`, `phone`, `email`; phone/email require actual annotated links, and none are invented. Informational website links are not classified as calls. The receiver adds its own full `receivedAt` timestamp.

The shared session is stored in sessionStorage only, expires after 30 minutes of inactivity, and is refreshed by recorded events. No persistent visitor ID or cross-device identity exists. Blocked storage falls back to memory for the current document. New tabs, storage restrictions, and returns after inactivity can split or complicate journeys. Reloads and back/forward-cache restores are additional page views, with distinct pageViewIds. Same-page anchors and navigation to About are not exploration events; About still records page views and outbound exploration back into the directory.

No campaign labels are approved yet, so both client and receiver campaign maps are empty. Arbitrary `source`, UTM values and query strings are never stored. Approved labels can later map to a controlled source/medium. Without a label, recognized Google/Bing/DuckDuckGo referrers are inferred organic search, other external referrers become `other_referral`, and absent/internal referrers become `direct_or_unknown`. Search classification is an inference: browsers can hide referrers, and untagged ads may be indistinguishable from organic search. This does not collect search keywords or referrer URLs.

## Generation and coverage

Run `node scripts/build-seo.mjs` after course/page changes. It generates tracking scripts on every area/course page, explicit IDs/actions on outbound anchors, browser route/identity metadata, and receiver `tracking/backend/Metadata.gs`. Internal exploration is handled by one delegated listener against those known routes. Nearby links retain their target course identity. No per-course analytics handler is required.

The same metadata annotates homepage cards. Indoor records now have permanent `indoor-####` IDs; retain those IDs when editing or reordering facilities. New facilities need one unique ID as part of their record. The builder asserts uniqueness. Current coverage is 80 published pages, 124 outdoor identities and 14 Indoor identities.

Browser and backend metadata must be released together when new routes or actions are published. A new page does not need hand-written tracking, but its generated receiver metadata must reach the receiver. Unknown routes are deliberately rejected rather than silently accepted.

## Backend and Sheets

`backend/Code.gs` provides guarded parsing, strict new-event field validation, explicit legacy routing, an Events header check, a script lock, durable exact event-ID deduplication against retained Events rows, and append without per-event number formatting. Invalid/unknown events are rejected before opening a workbook. No retry queue or visitor payload logging is added. A flush error can occur after a write; retrying the same ID is safe, but the browser does not retry. A public endpoint can still receive forged valid events.

The four legacy event types remain isolated in their original tabs for cached old clients. Their historical layouts and meanings are preserved, and the old Dashboard is not rewritten. New emitters send only the V2 privacy-limited contract. Legacy records are never mixed into new page-view totals.

Production destination: https://docs.google.com/spreadsheets/d/10pd71gIeCzvcB0lLKz5rqaWN-2vKJJbxJvez5Qm-L6k/edit

Additive tabs have been prepared: **Events** (headers only), **Tracking Lookup** (public page/course/facility identities), and **Tracking Summary** (clearly labeled not-live scaffold). No production event rows or historical values/formulas were written. The production Apps Script source/deployment has not been changed.

Synthetic demonstration: https://docs.google.com/spreadsheets/d/1jLx34074y7NcqKThbLzhjY1QS6Jbu1dFPma_5oZpJ1s/edit#gid=1360705686

The lab uses the same receiver and summary source, with only workbook access replaced by a fixed synthetic-workbook ID because the existing lab project is standalone. The previous lab source was preserved outside this worktree before replacing its editor source. No lab web-app deployment was created. The lab's manifest/authorization was not expanded.

`backend/Summary.gs` builds the summary from **Events only**. It shows page views/useful views, guide-to-course clicks, target identities with six action counts, source-page/action counts, and entry-source/landing-page sessions with downstream useful/outbound activity. A useful page view has at least one recorded navigation/outbound event attached to the same pageViewId within the selected window. Multiple actions still count as one useful view. Actions whose page view is missing or outside the date window are shown as unmatched and do not increase useful-view totals. Acquisition counts sessions seen within the window, not necessarily sessions that began within it.

Summary dates are inclusive Eastern calendar dates. Production's bound script supplies a **Tee Drop Tracking → Refresh Tracking Summary** menu and refreshes after a date edit. The summary is a timestamped snapshot, not a live update after every event. In the standalone synthetic project, run `refreshTrackingSummary` in Apps Script to refresh after changing dates. No trigger was installed. Native Google date-window exclusion/restoration is included in lab validation.

## Validation and local review

- `node scripts/build-seo.mjs --preview`
- `node --test scripts/tracking.test.mjs scripts/seo-regression.test.mjs`
- `node scripts/build-tracking-lab.mjs` prepares an ignored synthetic-only paste bundle; it does not upload or deploy.
- `node scripts/serve-tracking-review.mjs` serves localhost with an injected review panel and in-memory event capture. This panel is not generated into the site.
- `node scripts/verify-tracking-review.mjs` verifies the completed representative UI journey.
- `node scripts/serve-tracking-review.mjs --failure` exercises the production delivery branch with locally rejected fetches. No request goes to Google in this mode.

Tests cover attribution, expiry, storage failure, reload/restoration, keyboard/middle-click behavior, preview exclusions, rejection of private/unknown fields, duplicate and partial-write cases, explicit legacy isolation, identity metadata, and summary distinctness. The synthetic receiver run verified the actual Google typed visit tables without the old formatting exception. No production tracking probe was sent.

## Release remains a separate approval

1. Reconfirm the currently deployed production Apps Script version and preserve its source/settings. Review the three prepared production tabs and historical headers.
2. Install the reviewed `backend/*.gs` into the bound production project, preserving deployment identity/access. Run `setupTrackingV2` once to initialize the prepared summary and lookup. It does not modify old tabs. Keep the production workbook timezone Eastern.
3. Publish an immutable receiver version and update the existing web-app deployment only after explicit release approval. Verify acceptance in a controlled release check before enabling the frontend.
4. Set `tracking-config.js` to the existing verified endpoint with `enabled: true`, then release frontend and matching generated metadata together. Do not combine old/new counts across the cutover.
5. Verify low-volume delivery and review the summary. Roll back by disabling the new frontend collector or restoring the previous frontend; retain the safe receiver so cached new events never fall into Course Clicks. Keep collected rows intact.

Limitations: browser requests are best effort (`no-cors` cannot acknowledge acceptance); no completed-booking/call measurement; no reliable unique-people or bot count. Production-host checks suppress ordinary preview traffic but cannot authenticate browsers. Durable deduplication and summary refresh scan retained rows, so monitor latency/quotas as traffic grows. No automatic retention/deletion is implemented; the recommended 90-day raw policy still needs a separate operational decision. No GA4, GTM, advertising, location, search/filter, scroll, dwell, or replay instrumentation was added.
