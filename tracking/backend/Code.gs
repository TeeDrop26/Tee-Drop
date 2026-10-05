// Bound Apps Script project. No deployment is performed by this source.
const EVENT_COLUMNS = ['receivedAt', 'schemaVersion', 'eventType', 'eventId', 'sessionId', 'pageViewId', 'eventSequence', 'page', 'pageType', 'pageCourseId', 'entryPage', 'entrySource', 'entryMedium', 'campaign', 'previousPage', 'targetPage', 'targetCourseId', 'targetFacilityId', 'actionType', 'placement'];
const ACTIONS = ['booking', 'course_info', 'rate_source', 'course_updates', 'phone', 'email'];
const PLACEMENTS = ['content', 'header', 'footer', 'breadcrumb', 'nearby', 'course_list', 'course_of_week', 'course_of_month', 'indoor_list'];
const APPROVED_CAMPAIGNS = {}; // Must match tracking-config.js when labels are approved.
const PRODUCTION_WORKBOOK_ID = '10pd71gIeCzvcB0lLKz5rqaWN-2vKJJbxJvez5Qm-L6k';
const SYNTHETIC_WORKBOOK_ID = '1jLx34074y7NcqKThbLzhjY1QS6Jbu1dFPma_5oZpJ1s';
const LEGACY_COLUMNS = {
  'Website Visits': ['Received At', 'Time Eastern', 'Traffic Source', 'Page', 'Referrer', 'Session ID'],
  'Indoor Page Visits': ['Received At', 'Time Eastern', 'Traffic Source', 'Page', 'Referrer', 'Session ID'],
  'Course Clicks': ['Received At', 'Time Eastern', 'Course', 'City', 'Source', 'Booking Type', 'Booking URL', 'Page', 'Message', 'Created At', 'Traffic Source'],
  'Indoor Facility Clicks': ['Received At', 'Time Eastern', 'Facility', 'City', 'Source', 'Traffic Source', 'Booking Type', 'Booking URL', 'Page']
};

function validateEvent(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return 'invalid_payload';
  if (!['page_view', 'navigation_click', 'outbound_click'].includes(data.eventType)) return 'unsupported_event_type';
  const common = EVENT_COLUMNS.slice(1, 15);
  const extras = data.eventType === 'navigation_click' ? ['targetPage', 'targetCourseId', 'placement']
    : data.eventType === 'outbound_click' ? ['targetCourseId', 'targetFacilityId', 'actionType', 'placement'] : [];
  if (Object.keys(data).some(k => !common.concat(extras).includes(k))) return 'unexpected_field';
  if (Object.keys(data).some(k => !['schemaVersion', 'eventSequence'].includes(k) && (typeof data[k] !== 'string' || data[k].length > 250))) return 'invalid_field';
  if (data.schemaVersion !== 1 || !Number.isSafeInteger(data.eventSequence) || data.eventSequence < 1 || data.eventSequence > 1000000) return 'invalid_version_or_sequence';
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (['eventId', 'sessionId', 'pageViewId'].some(k => typeof data[k] !== 'string' || !uuid.test(data[k]))) return 'invalid_id';
  const pages = TRACKING_METADATA.pages;
  const page = Object.prototype.hasOwnProperty.call(pages, data.page) && pages[data.page];
  if (!page || data.pageType !== page.type || (data.pageCourseId || '') !== (page.courseId || '')) return 'invalid_page';
  if (!Object.prototype.hasOwnProperty.call(pages, data.entryPage) || typeof data.previousPage !== 'string'
      || (data.previousPage !== '' && !Object.prototype.hasOwnProperty.call(pages, data.previousPage))) return 'invalid_context';
  const sourcePairs = { direct_or_unknown: 'unknown', google: 'organic', bing: 'organic', duckduckgo: 'organic', other_referral: 'referral' };
  if (typeof data.campaign !== 'string') return 'invalid_attribution';
  if (data.campaign) {
    const campaign = Object.prototype.hasOwnProperty.call(APPROVED_CAMPAIGNS, data.campaign) && APPROVED_CAMPAIGNS[data.campaign];
    if (!campaign || campaign.source !== data.entrySource || campaign.medium !== data.entryMedium) return 'invalid_attribution';
  } else if (!Object.prototype.hasOwnProperty.call(sourcePairs, data.entrySource) || sourcePairs[data.entrySource] !== data.entryMedium) return 'invalid_attribution';
  if (data.eventType !== 'page_view' && !PLACEMENTS.includes(data.placement)) return 'invalid_placement';
  if (data.eventType === 'navigation_click') {
    const target = Object.prototype.hasOwnProperty.call(pages, data.targetPage) && pages[data.targetPage];
    if (!target || !['home', 'area', 'course', 'indoor'].includes(target.type) || data.targetPage === data.page
        || (data.targetCourseId || '') !== (target.courseId || '')) return 'invalid_target';
  }
  if (data.eventType === 'outbound_click') {
    if (!!data.targetCourseId === !!data.targetFacilityId || !ACTIONS.includes(data.actionType)) return 'invalid_action';
    const target = data.targetCourseId || data.targetFacilityId;
    if (!(TRACKING_METADATA.allowed[data.page] || []).includes(target + ':' + data.actionType)) return 'invalid_target_action';
  }
  return '';
}

function trackingWorkbook() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss || ![PRODUCTION_WORKBOOK_ID, SYNTHETIC_WORKBOOK_ID].includes(ss.getId())) throw new Error('Wrong tracking workbook');
  return ss;
}

function requireHeaders(sheet, expected) {
  if (!sheet || JSON.stringify(sheet.getRange(1, 1, 1, expected.length).getValues()[0]) !== JSON.stringify(expected)) throw new Error('Tracking headers do not match');
}

function response(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }

function doPost(e) {
  let data;
  try {
    if (!e || !e.postData || typeof e.postData.contents !== 'string' || e.postData.contents.length > 6000) return response({ ok: false, error: 'invalid_payload' });
    data = JSON.parse(e.postData.contents);
  } catch (_) { return response({ ok: false, error: 'invalid_payload' }); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return response({ ok: false, error: 'invalid_payload' });
  // Only these four exact legacy types are accepted. Unknown events never write.
  const legacy = ['outdoor_page_view', 'indoor_page_view', 'course_click', 'indoor_click'].includes(data.eventType);
  const error = legacy ? validateLegacy(data) : validateEvent(data);
  if (error) return response({ ok: false, error: error });
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(2000)) return response({ ok: false, error: 'busy' });
  try {
    const ss = trackingWorkbook();
    if (legacy) {
      appendLegacy(ss, data);
    } else {
      const sheet = ss.getSheetByName('Events');
      requireHeaders(sheet, EVENT_COLUMNS);
      // Durable exact-ID check under the same lock as append. No retry queue/cache race.
      if (sheet.getLastRow() > 1 && sheet.getRange(2, 4, sheet.getLastRow() - 1, 1)
          .createTextFinder(data.eventId).matchEntireCell(true).findNext()) return response({ ok: true, duplicate: true });
      sheet.appendRow(EVENT_COLUMNS.map(k => k === 'receivedAt' ? new Date() : data[k] === undefined ? '' : data[k]));
    }
    // No per-event date formatting: typed Google table columns reject it after append.
    SpreadsheetApp.flush();
    return response({ ok: true });
  } catch (_) {
    // A flush error can occur after persistence. Do not retry or log visitor payloads.
    return response({ ok: false, error: 'write_failed' });
  } finally { lock.releaseLock(); }
}

function validateLegacy(data) {
  // Cached old clients retain their four historical contracts; never mix into Events.
  const fields = ['eventType', 'trafficSource', 'page', 'referrer', 'sessionId', 'createdAt', 'course', 'city', 'source', 'bookingType', 'bookingUrl', 'message', 'timeEastern', 'clickedAtEastern', 'facility'];
  if (Object.keys(data).some(k => !fields.includes(k) || typeof data[k] !== 'string' || data[k].length > 2000)) return 'invalid_legacy_payload';
  return '';
}

function appendLegacy(ss, d) {
  const now = new Date(), eastern = Utilities.formatDate(now, 'America/New_York', 'MMM d, yyyy h:mm a');
  let tab, row;
  if (d.eventType === 'outdoor_page_view' || d.eventType === 'indoor_page_view') {
    tab = d.eventType === 'outdoor_page_view' ? 'Website Visits' : 'Indoor Page Visits';
    row = [now, eastern, d.trafficSource || 'direct', d.page, d.referrer, d.sessionId];
  } else if (d.eventType === 'indoor_click') {
    tab = 'Indoor Facility Clicks';
    row = [now, eastern, d.facility, d.city, d.source || 'indoor golf', d.trafficSource || 'direct', d.bookingType, d.bookingUrl, d.page];
  } else if (d.eventType === 'course_click') {
    tab = 'Course Clicks';
    row = [now, d.timeEastern || d.clickedAtEastern, d.course, d.city, d.source, d.bookingType, d.bookingUrl, d.page, d.message, d.createdAt, d.trafficSource || 'direct'];
  } else { throw new Error('Unsupported legacy event'); }
  const sheet = ss.getSheetByName(tab);
  requireHeaders(sheet, LEGACY_COLUMNS[tab]);
  sheet.appendRow(row.map(v => typeof v === 'string' && /^[=+@-]/.test(v) ? "'" + v : v === undefined ? '' : v));
}
