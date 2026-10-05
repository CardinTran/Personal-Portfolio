# Personal Portfolio

Development foundation for Cardin Tran's portfolio covering software engineering, AI, and robotics. The final portfolio has not been designed or built. The current screen is only a setup placeholder.

React, strict TypeScript, Vite, and plain CSS; npm for dependencies; ESLint and Prettier for code quality. The stack was selected because the initial repository contained only the resume.

## Develop

Use Node.js 22.14+ within the 22.x line (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Run `npm run check` before a PR. `npm run build` produces `dist/`; `npm run preview` previews that build locally. See [development workflow](docs/DEVELOPMENT.md) for all available scripts and validation requirements. No hosting is configured.

## Project context

- [CLAUDE.md](CLAUDE.md): agent startup, factual boundaries, autonomy, and delivery workflow.
- [Content](docs/CONTENT.md): verified facts with source IDs; the resume remains authoritative.
- [Design](docs/DESIGN.md), [references](docs/REFERENCES.md), and [interactions](docs/INTERACTIONS.md): creative process, owner inspiration, and purposeful behavior.
- [Architecture](docs/ARCHITECTURE.md), [development](docs/DEVELOPMENT.md), and [decisions](docs/DECISIONS.md): technical context and continuity.

## Structure

```text
src/                 application shell and styles
  data/              approved runtime facts with provenance
docs/                resume and persistent project context
.github/             validation workflow and PR template
```

Personal claims must come from the resume or another explicitly owner-approved repository source. Missing information is omitted, never invented. The supplied resume is documented in the content ledger and is not automatically published by the app.

## Contribute

Read `CLAUDE.md` and relevant docs, inspect the working tree, and use a scoped `feature/`, `fix/`, `refactor/`, `docs/`, or `chore/` branch. Validate and commit coherent units, push, and open a descriptive PR using the template when access permits. Normal development does not go directly on `main`. Review and merge separately.

Recommended first Claude task: read the project context and resume, audit available content/assets, and propose three structurally different design directions with mobile strategies. Identify missing inputs and wait for direction selection before implementing the final layout.
