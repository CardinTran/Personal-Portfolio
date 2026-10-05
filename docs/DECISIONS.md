# Significant decisions

Record settled architecture and owner-approved creative direction here. Keep rationale and status; do not log every implementation detail. If superseded, mark the earlier entry and explain why. This log preserves context across agent sessions.

## D001 — Resume authority and content provenance

Status: established by owner requirements during repository setup.

`docs/Sep18 Resume Mark1.pdf` is ultimate factual authority; `CONTENT.md` is its verified structured extraction. Application facts live in provenance-tagged `src/data/` records. New sources require explicit owner approval and registry entries. Visible resume contact text takes precedence over conflicting embedded placeholder URLs; do not claim live link verification. “Present” and education date wording remain as written.

## D002 — Minimal frontend foundation

Status: implemented during setup; no prior framework existed.

Use React, strict TypeScript, Vite, npm, and plain CSS. This supports incremental interactive portfolio work without a server framework, component kit, router, or global state layer. TypeScript remains on the supported 5.9 line for lint-tool compatibility. Add dependencies only for demonstrated needs. Hosting and production SEO strategy remain unresolved.

## D003 — Validation and delivery

Status: configured locally; remote checks depend on push/authentication.

Use ESLint, Prettier, TypeScript, and production build via `npm run check`, with a matching GitHub Actions workflow. Add behavior testing when real interactions/logic require it. Work on scoped branches with logical commits and descriptive PRs; review/merge is separate. Branch protection has not been configured.

## D004 — Final design deferred

Status: awaiting owner selection.

No palette, typography system, navigation model, project presentation model, or motion concept is approved. The initial shell is intentionally neutral. First design work should present distinct structural concepts based on approved content and available assets, followed by owner selection before major implementation. Record that choice here when made.
