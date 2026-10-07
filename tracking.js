/* Small, dependency-free event collector. Never prevents navigation. */
(() => {
  "use strict";
  if (window.TeeDropTracking) return;
  const config = window.TEE_DROP_TRACKING_CONFIG || {};
  const metadata = window.TEE_DROP_TRACKING_METADATA || { pages: {} };
  const key = "teeDropTrackingV2Session";
  const timeout = 30 * 60 * 1000;
  const preview = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
  const active = config.enabled === true && config.productionHosts?.includes(location.hostname)
    && /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(config.endpoint || "");
  const id = () => crypto.randomUUID();
  const path = value => {
    try {
      const url = new URL(value, location.href);
      if (url.origin !== location.origin) return "";
      let p = url.pathname.replace(/\/index\.html$/, "/");
      if (!p.endsWith("/") && !p.endsWith(".html")) p += "/";
      return Object.hasOwn(metadata.pages, p) ? p : "";
    } catch { return ""; }
  };
  const page = path(location.href);
  if (!page || (!active && !preview)) return;
  let memory;
  const read = () => { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return memory; } };
  const write = value => { memory = value; try { sessionStorage.setItem(key, JSON.stringify(value)); } catch {} };
  function attribution() {
    const params = new URLSearchParams(location.search);
    for (const label of [params.get("source"), params.get("utm_campaign"), params.get("campaign")]) {
      if (label && Object.hasOwn(config.campaigns || {}, label)) {
        const campaign = config.campaigns[label];
        return { entrySource: campaign.source, entryMedium: campaign.medium, campaign: label };
      }
    }
    try {
      const ref = new URL(document.referrer);
      if (ref.origin !== location.origin) {
        const known = { "www.google.com": "google", "www.google.co.uk": "google", "www.google.ca": "google", "www.bing.com": "bing", "duckduckgo.com": "duckduckgo" };
        if (known[ref.hostname]) return { entrySource: known[ref.hostname], entryMedium: "organic", campaign: "" };
        return { entrySource: "other_referral", entryMedium: "referral", campaign: "" };
      }
    } catch {}
    return { entrySource: "direct_or_unknown", entryMedium: "unknown", campaign: "" };
  }
  let pageViewId = id();
  let previousPage = document.referrer ? path(document.referrer) : "";
  function session() {
    const now = Date.now();
    let s = read();
    if (!s || typeof s.id !== "string" || !Number.isInteger(s.sequence)
        || !metadata.pages[s.entryPage] || now - s.lastActivity >= timeout || now < s.lastActivity) {
      s = { id: id(), sequence: 0, lastActivity: now, entryPage: page, ...attribution() };
    }
    return s;
  }
  let currentSession = session().id;
  function emit(eventType, fields = {}) {
    try {
      let s = session();
      // A click after inactivity starts a new visit on the current page.
      if (s.id !== currentSession) {
        currentSession = s.id;
        pageViewId = id();
        previousPage = "";
        write(s);
        if (eventType !== "page_view") emit("page_view");
        s = read() || s;
      }
      s.sequence += 1;
      s.lastActivity = Date.now();
      write(s);
      const info = metadata.pages[page];
      const record = {
        schemaVersion: 1, eventType, eventId: id(), sessionId: s.id,
        pageViewId, eventSequence: s.sequence, page, pageType: info.type,
        ...(info.courseId ? { pageCourseId: info.courseId } : {}),
        entryPage: s.entryPage, entrySource: s.entrySource, entryMedium: s.entryMedium,
        campaign: s.campaign, previousPage, ...fields
      };
      if (preview) {
        // In-memory only; no preview events leave the browser or persist on disk.
        window.TeeDropTracking.previewEvents.push(record);
        return;
      }
      fetch(config.endpoint, { method: "POST", body: JSON.stringify(record),
        mode: "no-cors", keepalive: true, credentials: "omit", referrerPolicy: "no-referrer"
      }).catch(() => {});
    } catch { /* Analytics must not break the site, including blocked storage. */ }
  }
  function placement(link) {
    if (link.dataset.trackingPlacement) return link.dataset.trackingPlacement;
    if (link.closest(".seo-nearby")) return "nearby";
    if (link.closest("header")) return "header";
    if (link.closest("footer")) return "footer";
    if (link.closest(".seo-breadcrumbs")) return "breadcrumb";
    return "content";
  }
  function click(event) {
    if (event.defaultPrevented || (event.type === "auxclick" && event.button !== 1)
        || (event.type === "click" && event.button !== 0)) return;
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || link.hasAttribute("download")) return;
    try {
      const target = path(link.href);
      if (target) {
        // Same-document anchors do not constitute a new exploration step.
        if (target === page) return;
        const targetInfo = metadata.pages[target];
        if (!["home", "area", "course", "indoor"].includes(targetInfo.type)) return;
        emit("navigation_click", { targetPage: target,
          ...(targetInfo.courseId ? { targetCourseId: targetInfo.courseId } : {}), placement: placement(link) });
      } else if (link.dataset.trackingAction) {
        const protocol = new URL(link.href).protocol;
        const action = protocol === "tel:" ? "phone" : protocol === "mailto:" ? "email" : link.dataset.trackingAction;
        if (!["https:", "http:", "tel:", "mailto:"].includes(protocol)) return;
        emit("outbound_click", {
          ...(link.dataset.trackingCourse ? { targetCourseId: link.dataset.trackingCourse } : {}),
          ...(link.dataset.trackingFacility ? { targetFacilityId: link.dataset.trackingFacility } : {}),
          actionType: action, placement: placement(link)
        });
      }
    } catch {}
  }
  window.TeeDropTracking = { previewEvents: [] };
  // Persist the initial session before emission; all pages use this one key.
  const initial = session(); currentSession = initial.id; write(initial);
  document.addEventListener("click", click);
  document.addEventListener("auxclick", click);
  window.addEventListener("pageshow", event => {
    if (event.persisted) { pageViewId = id(); previousPage = ""; emit("page_view"); }
  });
  emit("page_view");
})();
