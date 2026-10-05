# Architecture

## Current repository

Initially the repository contained one resume PDF, a clean `main` branch, one commit, and a GitHub origin. There was no frontend, package configuration, documentation convention, asset library, or existing design. Setup adds a working development shell; it does not implement the final portfolio.

## Technical choices

- React with strict TypeScript for understandable typed components; Vite for local development and static production bundling. npm plus the committed lockfile manages dependencies.
- Plain CSS in `src/styles.css` for now. Introduce colocated CSS modules when component scope warrants them. No utility framework or component library is needed to establish the environment.
- `src/main.tsx` mounts `App.tsx`; `App.tsx` renders a neutral preparation screen using the sourced name in `src/data/identity.ts`.
- No router, backend, database, global state provider, animation library, or external font is installed. This shell is one page. Future navigation and project-detail routing remain open design/product decisions; add routing only if actual needs justify it.

## Content architecture

The source chain is resume → verified `docs/CONTENT.md` ledger → provenance-tagged `src/data/` records → rendering components. The resume overrides extraction conflicts. Future owner-approved sources are registered with path, scope, and approval evidence before use.

Only identity data is instantiated now. Add experience/project/education/skill/link data when implementing those sections, with source IDs per record and optional fields omitted when unknown. Keep factual values centralized, distinguish source wording from presentation copy, and avoid maintaining duplicate claim sets across UI components. TypeScript does not establish factual truth; review every rewrite manually.

## Organization and assets

`src/` contains runtime code; `docs/` contains factual/design/engineering context; `.github/` contains the PR template and validation workflow. Add `src/components/` and `src/assets/` when actual reusable components/assets exist. Use imported source assets for bundler-managed URLs; use `public/` only when a stable unchanged public path is needed.

The resume lives in documentation and is not automatically published in the app or copied to `dist/`. Do not expose it as a download without considering which contact information the owner intends to publish. No real project visuals or branding were supplied. Temporary assets must be visibly labeled and never imply authentic project evidence. Optimize image format and size, provide dimensions and meaningful alt text, and lazy-load noncritical images as appropriate.

## Motion, validation, and deployment

No animation is implemented. Prefer CSS for purposeful interactions; follow `INTERACTIONS.md` and support reduced motion before adding libraries.

ESLint, TypeScript, Prettier, and production build form the current automated checks (`npm run check`). GitHub Actions is configured to run the same checks. No behavior-test runner is installed: introduce focused tests for meaningful behavior as it is built, and document commands then. Manual browser validation is required for UI, responsive layouts, keyboard, reduced motion, links, and console; tools do not certify accessibility or factual accuracy.

The production output is static `dist/`. No hosting provider, domain, production URL, analytics, contact service, or deployment credentials are selected/configured. Base-path settings and fallback routing must be revisited once hosting and routes are known. Client-rendered content is sufficient for this development shell; evaluate prerendering/metadata and search/social requirements before launch rather than assuming the shell is SEO-complete. Vite preview is local verification, not production hosting.

Technical references: [Vite guide](https://vite.dev/guide/) and [static deployment guide](https://vite.dev/guide/static-deploy.html). These are implementation references, not personal-content sources.
