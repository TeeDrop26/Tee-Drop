# Tee Drop Status

## Production

- Live site: https://www.playteedrop.com/
- Repository: `TeeDrop26/Tee-Drop`
- Production branch: `main`
- Current production code commit at this checkpoint: `2e29d4e`
- Tee Drop is a static HTML, CSS, and JavaScript site deployed through the existing production workflow.

## Directory

- 100 public-course records
- 100 rate-status records
- 14 verified indoor-golf facility records on `/indoor.html`
- Initial display: 10 matching course cards
- Show More: reveals 10 additional matching courses at a time
- In `rateInfo`, `summary` retains internal audit detail while `publicSummary` is the golfer-facing override used when internal wording should not appear on course cards.
- Tee Drop does not display live tee-time inventory, process bookings, or confirm completed bookings.

## Featured Courses

- August Course of the Month: Oak Shadows Golf Club
- Current Course of the Week: Carroll Meadows Golf Course
- Course of the Week continues to rotate from the configured course rotation.

## Tracking

- `Source` identifies the Tee Drop placement: `course list`, `course of the month`, or `course of the week`.
- `Traffic Source` identifies the visitor referral parameter and defaults to `direct`.
- Google Sheet tracking records course-link clicks, not unique golfers or confirmed bookings.
- Local Google Sheet setup documentation includes `Traffic Source` as the final column.
- Indoor Golf uses the same Apps Script endpoint but routes `indoor_click` events to the separate `Indoor Clicks` tab, leaving outdoor course-click reporting unchanged.
- Indoor tracking records facility, city, placement source, referral traffic source, booking type, booking URL, page, and Eastern timestamp; local previews fall back to `teeDropIndoorClicks` in local storage.

## Recent Production Commits

- `2e29d4e` - Add Tee Drop Indoor Golf
- `25cd6cf` - Expand Tee Drop directory to 100 courses
- `fdb39d9` - Expand verified course directory to 88
- `8f3c070` - Add golf course hero design
- `370cd51` - Remove hero dot pattern
- `d56bb74` - Update Spring Valley booking link

## Known Issues And Limitations

- Course rates and external booking links require periodic manual review.
- Some course rate pages are dynamic, undated, or stale; card wording preserves that uncertainty.
- Click totals do not represent unique golfers or confirmed bookings.
- Local prototype screenshots are intentionally excluded from version control.

## Protected Behavior

- Preserve course records, direct URLs, phone information, and rate-status wording unless a course has been reverified.
- Preserve search, Booking and Area filters, geolocation sorting, progressive loading, and Show More behavior.
- Preserve placement `Source` separately from referral `Traffic Source`.
- Preserve Google Sheet payload field order and existing click-tracking behavior.
- Preserve Oak Shadows Course of the Month and the rotating Course of the Week unless an approved feature update is scheduled.

## Spring Valley

- Verified online booking destination: https://foreupsoftware.com/index.php/booking/20683/5399#/teetimes
- Card treatment: Online booking / View Booking
- Spring Valley uses the standard online-booking helper text.
- The Spring Valley meeting and feature discussion is scheduled for August 12, 2026.
- No commitment has been made for Spring Valley or any other course to be September Course of the Month.

## Next Likely Tasks

- Complete the August 12 Spring Valley meeting and record any approved follow-up.
- Monitor the separate Indoor Golf click report and reverify facility details as they change.
- Continue monthly rate-status and external-link reviews.
- Review partner or feature opportunities without promising placement before approval.
- Keep local screenshots and temporary audit files out of production commits.
