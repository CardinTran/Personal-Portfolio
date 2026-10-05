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

Status: superseded by D006.

No palette, typography system, navigation model, project presentation model, or motion concept is approved. The initial shell is intentionally neutral. First design work should present distinct structural concepts based on approved content and available assets, followed by owner selection before major implementation. Record that choice here when made.

## D005 — Published contact details

Status: implemented with structured content data; confirmed by the owner on 2026-10-05.

Runtime data includes the resume's visible email, LinkedIn, and GitHub addresses as links. The phone number and home address (Harvey, LA 70058) remain in `CONTENT.md` but are not shipped in the client bundle, because anything imported is public and the owner has not chosen to publish them. Add them to `identity.ts` only on owner request.

## D006 — Direction A, chronological

Status: selected by the owner on 2026-10-05 from the concepts in PR #3.

The owner chose concept A, “Two Frames” (`docs/concepts/a-two-frames.html`), with two changes: present work chronologically rather than by topic, and let robotics and AI lead. Newest-first year groups satisfy both, since every 2026 entry is AI or robotics. The interactive frame diagram stays as the hero's illustration. Contact is limited to email, LinkedIn, and GitHub (D005 confirmed). Project visuals and repository links are labelled placeholders until supplied (CONTENT.md, OWNER-2026-10-05). Implementation details are in DESIGN.md, under “Approved direction”. Remove `docs/concepts/` once the implementation replaces it.
