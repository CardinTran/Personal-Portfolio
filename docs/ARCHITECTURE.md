# Architecture

## Current repository

Initially the repository contained one resume PDF, a clean `main` branch, one commit, and a GitHub origin. There was no frontend, package configuration, documentation convention, asset library, or existing design. Setup adds a working development shell; it does not implement the final portfolio.

## Technical choices

- React with strict TypeScript for understandable typed components; Vite for local development and static production bundling. npm plus the committed lockfile manages dependencies.
- Plain CSS: global tokens, base styles, and the shared `.sheet` section layout live in `src/styles.css`. Each component imports a colocated plain CSS file with BEM-style class names. No utility framework or component library.
- `src/main.tsx` loads fonts and mounts `App.tsx`. `App` composes `Hero` (with `frames/FramesDiagram`), `work/WorkSection` (year groups from `src/data/chronology.ts`), `ToolsSection`, and `SiteFooter`. The site is a single page.
- Typefaces are self-hosted through Fontsource (D007): Archivo variable with a width axis, and IBM Plex Mono 400/500 (Latin only). No router, backend, database, global state provider, or animation library is installed. Future navigation and project-detail routing remain open design/product decisions; add routing only if actual needs justify it.

## Content architecture

The source chain is resume → verified `docs/CONTENT.md` ledger → provenance-tagged `src/data/` records → rendering components. The resume overrides extraction conflicts. Future owner-approved sources are registered with path, scope, and approval evidence before use.

All resume sections are instantiated as typed, provenance-tagged records in `src/data/` (see its README); resume bullets are stored verbatim and optional fields are omitted when unknown. Keep factual values centralized, distinguish source wording from presentation copy, and avoid maintaining duplicate claim sets across UI components. TypeScript does not establish factual truth; review every rewrite manually.

## Organization and assets

`src/` contains runtime code; `docs/` contains factual/design/engineering context; `.github/` contains the PR template and validation workflow. Components live in `src/components/`, with a folder per feature when it holds several files (`frames/`, `work/`). Add `src/assets/` when owner-supplied visuals arrive. Use imported source assets for bundler-managed URLs; use `public/` only when a stable unchanged public path is needed.

The resume lives in documentation and is not automatically published in the app or copied to `dist/`. Do not expose it as a download without considering which contact information the owner intends to publish. No real project visuals or branding were supplied. Temporary assets must be visibly labeled and never imply authentic project evidence. Optimize image format and size, provide dimensions and meaningful alt text, and lazy-load noncritical images as appropriate.

## Motion, validation, and deployment

There is no animation. The hero diagram redraws only on input (see `INTERACTIONS.md`). Smooth in-page scrolling applies only when reduced motion is not requested. Prefer CSS for purposeful interactions, and support reduced motion before adding libraries.

ESLint, Prettier, Vitest, TypeScript, and the production build form the automated checks (`npm run check`), which GitHub Actions also runs. Vitest covers pure logic (diagram geometry, chronology integrity) in the Node environment. Add a DOM environment only when a component behavior needs it. Manual browser validation is required for UI, responsive layouts, keyboard, reduced motion, links, and console; tools do not certify accessibility or factual accuracy.

The production output is static `dist/`. No hosting provider, domain, production URL, analytics, contact service, or deployment credentials are selected/configured. Base-path settings and fallback routing must be revisited once hosting and routes are known. Client-rendered content is sufficient for this development shell; evaluate prerendering/metadata and search/social requirements before launch rather than assuming the shell is SEO-complete. Vite preview is local verification, not production hosting.

Technical references: [Vite guide](https://vite.dev/guide/) and [static deployment guide](https://vite.dev/guide/static-deploy.html). These are implementation references, not personal-content sources.
