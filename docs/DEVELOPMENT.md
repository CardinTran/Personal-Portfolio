# Development workflow

## Environment and commands

Use Node.js 22.14 or newer within the 22.x line (`.nvmrc`) and npm. `package-lock.json` is committed; use `npm ci` for reproducible installation. Do not mix package-manager lockfiles.

```sh
npm ci
npm run dev
```

Scripts defined in `package.json`:

| Command                | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `npm run dev`          | Vite local development server                                  |
| `npm run typecheck`    | Strict TypeScript checking without emitting files              |
| `npm run build`        | Typecheck and production bundle into `dist/`                   |
| `npm run preview`      | Local preview of the production build, not a production server |
| `npm run lint`         | ESLint; warnings fail                                          |
| `npm run format`       | Prettier formatting                                            |
| `npm run format:check` | Prettier verification                                          |
| `npm test`             | Vitest unit tests (run once)                                   |
| `npm run check`        | Lint, formatting verification, tests, and build                |

Tests are colocated as `*.test.ts` and cover nontrivial logic: diagram geometry and chronology integrity. Add targeted tests as new logic or interactions warrant them; use `npx vitest` for watch mode. Typechecking and linting are not substitutes for behavior or accessibility tests. CI runs installation and `npm run check` on pushes/PRs; remote execution must be confirmed on GitHub after pushing.

## Branches and commits

Normal workflow: `main → scoped branch → development → validation → logical commits → push → PR → review/merge`.

Before substantial work:

```sh
git status --short
git branch --show-current
git log -5 --oneline
```

Preserve unrelated changes. Start new work from an up-to-date primary branch when the worktree permits; fetch/check divergence before using `git pull --ff-only`. Avoid switching away from uncommitted work blindly. Continue the existing branch for the same task; for new work create a scoped branch, for example:

```sh
git switch -c feature/project-section
```

Use `feature/`, `fix/`, `refactor/`, `docs/`, or `chore/` according to scope. Examples: `feature/hero-layout`, `feature/responsive-navigation`, `fix/mobile-layout`, `fix/accessibility-navigation`, `refactor/project-data`. Normal feature work never goes directly on `main`.

Commit coherent completed units throughout development. Avoid one enormous website commit or commits for every tiny edit. Examples: `feat: implement selected work section`, `feat: add project detail layout`, `fix: respect reduced motion preference`, `refactor: move portfolio content into structured data`.

Before committing, review `git diff` and staged changes, run relevant checks, audit factual claims, remove accidental changes, and inspect for secrets/local files. Stage exact task files rather than sweeping unrelated work into a commit. Never commit credentials, dependency directories, generated builds, or personal local configuration.

## Content verification

Read `CONTENT.md` and the relevant resume passage. Follow its source IDs into `src/data/` records. Every displayed concrete claim, including metadata and alt text, needs evidence. Check dates, numbers, titles, technologies, scope, and implied impact. Preserve ambiguity; omit unknowns. New internet facts and generated copy are not approval. Owner-approved new sources require path, scope, and approval evidence in `CONTENT.md`.

## Validation and pre-PR checklist

- Run `npm run check`; run any targeted behavior tests introduced for the feature.
- Review factual claims against approved sources. Check that placeholders are visible as placeholders and are not represented as authentic assets.
- For UI work, inspect mobile/tablet/laptop/desktop and zoom, content order, overflow, links, focus, keyboard navigation, headings, alt text, contrast, and reduced motion. Inspect browser console for errors.
- Review image/font loading, layout shift, unnecessary JS, and expensive motion; measure production performance when substantial changes affect it. Do not fabricate scores.
- Perform the `DESIGN.md` critique for significant visual work. Capture screenshots at representative widths when the environment supports them.
- Review the full branch diff, dependency changes, lockfile, accidental files, and secrets. Update relevant architecture, content, interaction, and decision documentation.

## Push and pull request

Push the task branch when authentication and repository access permit:

```sh
git push -u origin HEAD
gh pr create --base main --template .github/pull_request_template.md
```

Use the template's Summary, Changes, Validation, Visual changes, Content verification, and Screenshots sections. Report actual checks and pending checks separately. Include screenshots for meaningful visuals when supported; otherwise explain what should be captured. Prefer one PR for coherent work rather than microscopic PRs. Review/merge is a separate step; do not self-merge or rewrite shared history without authorization.

If authentication is unavailable, retain the branch and commits, prepare a reviewable PR body, and report the exact blocker. Do not claim a push/PR succeeded without evidence. Branch protection and required review are remote settings; documentation and CI do not enable them automatically.
