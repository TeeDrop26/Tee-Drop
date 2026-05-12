# Last Minute Tee Times Prototype

This is a simple first version of a golf tee time finder. It runs as a mobile-friendly website and does not need a build step.

## How to Try It

Open `index.html` in a browser.

## Where to Add Real Courses

Edit the `courses` array at the top of `app.js`.

Each course needs:

- `name`
- `city`
- `latitude`
- `longitude`
- `bookingUrl`
- `teeTimes`

For now, the app sends golfers to the course booking page. Direct in-app booking can come later after course or platform partnerships.

## Good Next Features

- Add real local courses from your spreadsheet
- Add saved favorite courses
- Add alert signups for last-minute openings
- Replace sample tee times with live data from partner courses or tee time APIs

## Alert Signups

The alert form is ready for Netlify Forms.

When you publish the site on Netlify:

1. Open the site dashboard in Netlify.
2. Go to Forms.
3. Enable form detection if Netlify asks.
4. Redeploy the site.
5. New submissions should appear under the `tee-drop-alerts` form.

While testing on `localhost`, submissions are saved only in this browser.
