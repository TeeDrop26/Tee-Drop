# Tee Drop Status

## Production

- Live site: https://www.playteedrop.com/
- Repository: `TeeDrop26/Tee-Drop`
- Production branch: `main`
- Current production commit at this checkpoint: `d56bb74`
- Tee Drop is a static HTML, CSS, and JavaScript site deployed through the existing production workflow.

## Directory

- 88 public-course records
- 88 rate-status records
- Initial display: 10 matching course cards
- Show More: reveals 10 additional matching courses at a time
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

## Recent Production Commits

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
- Continue monthly rate-status and external-link reviews.
- Review partner or feature opportunities without promising placement before approval.
- Keep local screenshots and temporary audit files out of production commits.
