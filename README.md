# Tee Drop

Tee Drop is a static Northeast Ohio public golf course directory. It keeps public course links in one place so golfers can check options faster and book direct whenever possible.

Tee Drop does not provide live tee-time inventory, does not process bookings, and does not take payment. Course links send golfers to the course website, booking page, or information page.

Posted rates can change. Golfers should confirm rates and availability with the course before booking.

## What It Includes

- Direct course and booking links
- Posted rate information when available
- Course and town search
- Area filtering
- Online-booking versus call/info filtering
- Location-based distance sorting
- Course-link click tracking through Google Sheets, with Formspree as a fallback
- Course of the Week

`Source` records the Tee Drop placement where a click occurred, while `Traffic Source` records the referral parameter or defaults to `direct`.

## Project Files

- `index.html` contains the page structure, filters, SEO metadata, and footer.
- `styles.css` contains the visual design and responsive layout.
- `app.js` contains the course list, filters, location sorting, Course of the Week, rate text, and click tracking.
- `tee-drop-fairway.jpg` is the main visual image used by the site.
- `favicon.svg` is the browser icon.

There is no framework, package install, build process, or server-side code.

## Updating Course Information

Open `app.js` and edit the `courses` array near the top of the file.

Each course should include:

- `name`
- `city`
- `area`
- `latitude`
- `longitude`
- `bookingUrl`
- `teeTimes`

Use one of these `area` values:

- `Tuscarawas County`
- `Canton / Stark County`
- `Akron / Summit County`
- `Wayne / Holmes County`
- `Cleveland area`
- `Eastern Northeast Ohio`
- `Other Northeast Ohio`

For call-only or information-only courses, keep a `bookingLabel` value. The site uses that to classify the course as call/info and shows the button text `Course Info`.

## Adding or Editing Rate Information

Add or update a `rateInfo` block inside a course:

```js
rateInfo: {
  summary: "Weekend posted: 18 w/cart $60; 9 w/cart $38.",
  checked: "Jul 17, 2026"
}
```

Keep the rate summary short and include only posted or course-provided information. Always keep the reminder that rates should be confirmed with the course before booking.

## Adding a New Course

Copy an existing course object in `app.js`, paste it into the `courses` array, and update the fields.

Make sure:

- The `bookingUrl` is the course website, booking page, or information page.
- The `area` matches the course location as closely as possible.
- The latitude and longitude are accurate enough for distance sorting.
- `teeTimes` remains an empty array unless the site has a real source for live inventory.

Do not add fake live tee times.

## Opening the Site Locally

Because Tee Drop is static, you can open `index.html` directly in a browser.

For the most accurate preview, serve the folder with a simple local web server and open the local address in a browser. This helps test browser features like geolocation more realistically than opening the file directly.

## Publishing

Upload or commit the static files to the GitHub repository root:

- `index.html`
- `styles.css`
- `app.js`
- `tee-drop-fairway.jpg`
- `favicon.svg`

Vercel publishes the site from the repository root on the `main` branch.
