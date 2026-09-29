# Seasonal features: offseason pause

Prepared September 29, 2026. Owner approved this offseason release on September 29, 2026.

The homepage's Course of the Month and Course of the Week presentation is retained inside the inert `seasonalFeaturesTemplate` HTML template. It is not mounted in the document, exposed in the accessibility tree, or rendered; it occupies no layout space. No seasonal cards, images or booking actions are created. Both homepage and Indoor navigation omit the retired Featured anchor.

`renderCourseOfMonth` already returns when its mount is absent. `renderFeaturedCourse` now does the same. Their rendering code, source labels, monthly selection, weekly rotation, image mappings, crop settings, credit/permission notes, local image assets and CSS remain intact. No date automatically re-enables them. Directory data and tracking functions remain unchanged. The homepage app.js query version is advanced to avoid loading old code against the paused markup.

## Relaunch in 2027

1. Review and replace the September 2026 monthly selection, copy, image and accessible label. Preserve its historical content as a reference rather than presenting it as current.
2. Review the June 2026 weekly rotation start and sequence; choose the 2027 schedule explicitly. The old cyclic schedule must not silently determine the new season.
3. Review retained photo source, permission and credit notes; retained assets include cases where separate rights-holder reuse permission was not recorded. Keep those distinctions with the assets.
4. After owner approval of the content, unwrap the template into the homepage at its existing position (or deliberately mount its content before the script queries the section nodes). Restore Featured navigation on both home and Indoor together. Update the app asset query version if code changes.
5. Test layout, image fallbacks, both seasonal booking actions and their existing tracking source labels, plus directory regression checks, before deploying.

No Sheet, Apps Script, SEO generation or directory data migration is needed to pause or resume this presentation. Improvements for 2027 should be scoped separately. Consider an explicit seasonal enable/disable setting and dated monthly configuration then; they are not necessary for this small pause.

## Rollback

Baseline: `5063e1e8969eeac412969178c0003f9f7ac1f359` (Add approved local Chenoweth weekly photo).

Before deployment, discard only this proposal's changes or leave the isolated branch for review. After a future approved deployment, restore `index.html`, `indoor.html` and `app.js` together from the baseline through the normal release process. No data needs restoring because none was removed. This restores the old September copy and cyclic weekly feature, so check that presenting those again is actually intended. Retain this note as history if helpful.
