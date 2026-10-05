# Tracking V2 release — October 5, 2026

Owner approved the reviewed scope for production release. Receiver version 9 deployed to the unchanged existing endpoint at 12:58 PM Eastern, preserving execute-as-owner and Anyone access. Production setup completed successfully; historical tabs were untouched. A single explicit About page-view release probe returned `ok: true` before frontend enablement. The probe is retained in Events and is test traffic, not organic usage.

The frontend configuration is enabled against that verified endpoint. Main is deployed through the existing Vercel integration. The approved local review and synthetic checks are recorded in REVIEW.md. Source and deployment settings from receiver version 8 were backed up outside the repository in the workspace tmp directory.

No campaign mapping, retention automation, new event types, or analytics libraries were added. Release smoke-test results will be reported to the owner after publication.
