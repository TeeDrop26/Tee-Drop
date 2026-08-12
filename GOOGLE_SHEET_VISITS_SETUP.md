# Tee Drop Visit Tracking

The existing Tee Drop Apps Script web app records activity in separate Google Sheet tabs. Keep its existing `/exec` deployment URL and do not change the existing course-click or indoor-facility-click column order.

## Production Tabs

| Event type | Sheet tab | Purpose |
| --- | --- | --- |
| `course_click` | `Course Clicks` | Outdoor course-link clicks |
| `indoor_click` | `Indoor Facility Clicks` | Indoor facility-link clicks |
| `outdoor_page_view` | `Website Visits` | Main Tee Drop page visits |
| `indoor_page_view` | `Indoor Page Visits` | Indoor Golf page visits |

`Dashboard` remains unchanged.

## Visit Columns

Both visit tabs use this exact order:

```text
Received At, Time Eastern, Traffic Source, Page, Referrer, Session ID
```

`Received At` is a Date value formatted as `mmm d, yyyy`. `Time Eastern` retains the full Eastern timestamp.

## Tracking Meanings

- `source` identifies the Tee Drop placement for a click, such as `course list`, `course of the month`, or `course of the week`.
- `trafficSource` identifies the visitor referral parameter from `?source=` and defaults to `direct`.
- Visit records use an anonymous session ID and `sessionStorage`. One browser session records one visit per traffic-source value, so ordinary refreshes do not inflate visits.
- These records measure visits and link activity, not unique golfers or confirmed bookings.

## Apps Script Routing

The deployed Apps Script uses the following routing variables and behavior:

```javascript
const SHEET_NAME = "Course Clicks";
const INDOOR_SHEET_NAME = "Indoor Facility Clicks";
const OUTDOOR_VISITS_SHEET_NAME = "Website Visits";
const INDOOR_VISITS_SHEET_NAME = "Indoor Page Visits";
const RECEIVED_AT_FORMAT = "mmm d, yyyy";
const TRACKING_TIME_ZONE = "America/New_York";

function doPost(e) {
  const data = JSON.parse(e.postData.contents || "{}");

  if (data.eventType === "outdoor_page_view") {
    recordVisit(OUTDOOR_VISITS_SHEET_NAME, data);
  } else if (data.eventType === "indoor_page_view") {
    recordVisit(INDOOR_VISITS_SHEET_NAME, data);
  } else if (data.eventType === "indoor_click") {
    // Existing Indoor Facility Clicks append behavior.
  } else {
    // Existing Course Clicks append behavior.
  }
}

function recordVisit(sheetName, data) {
  const receivedAt = new Date();
  const easternTime = Utilities.formatDate(
    receivedAt,
    TRACKING_TIME_ZONE,
    "MMM d, yyyy h:mm a"
  );
  const visitSheet = getVisitSheet(sheetName);

  appendTrackedRow(visitSheet, [
    receivedAt,
    easternTime,
    data.trafficSource || "direct",
    data.page || "",
    data.referrer || "",
    data.sessionId || ""
  ]);
}

function appendTrackedRow(sheet, values) {
  const row = sheet.getLastRow() + 1;
  sheet.appendRow(values);
  sheet.getRange(row, 1).setNumberFormat(RECEIVED_AT_FORMAT);
}
```

When changing this integration, keep all four event types isolated in their intended tabs. Do not route page-view events through the outdoor Formspree fallback; Formspree remains the fallback only for outdoor `course_click` activity.
