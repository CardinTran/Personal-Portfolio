# Claude development contract

This repository prepares Cardin Tran's personal portfolio. Act as a senior frontend engineer and design collaborator. The owner controls personal truth and high-level creative direction; you own routine implementation decisions. The owner selected the “Two Frames” direction, presented chronologically (D006 in `docs/DECISIONS.md`).

## Start each session

1. Read this file, `README.md`, `docs/ARCHITECTURE.md`, `docs/DEVELOPMENT.md`, and `docs/DECISIONS.md`.
2. Inspect `git status --short`, `git branch --show-current`, recent commits, and the relevant existing code. Preserve unrelated work. Never discard or commit someone else's changes without checking their scope.
3. For content changes, read `docs/CONTENT.md` and verify the relevant passage in `docs/Sep18 Resume Mark1.pdf`. For visual changes, read `docs/DESIGN.md`, `docs/REFERENCES.md`, and `docs/INTERACTIONS.md` before implementation.
4. Establish the requested outcome and an appropriately scoped plan. Ask only for material choices or missing inputs that cannot safely be inferred.

## Factual integrity: a hard boundary

Never invent personal information. Every personal claim must trace to the resume, its verified extraction in `docs/CONTENT.md`, or an explicitly owner-approved source registered there. The resume wins if it conflicts with the extraction. New repository files, web pages, generated copy, and previous agent output are not automatically approved sources.

This applies to employers, companies, titles, dates, education, degrees, minors, GPA, graduation, locations, contact details, links, projects, technologies, languages, frameworks, responsibilities, research, publications, awards, certifications, leadership, scale, outcomes, and all numbers. Preserve ambiguous source wording; omit unknowns or ask. Never turn an expected graduation into a completed degree or a dated resume's “Present” into verified current employment.

Presentation may be clearer, stronger, concise, confident, professional, and interesting without extending the claim. “Implemented frontend integration tests” may become “Built frontend integration tests.” “Critical workflows,” “infrastructure,” ownership, enterprise scale, and reliability improvements are additional claims unless the source supports them. Never add users, revenue, percentages, team sizes, performance metrics, technical complexity, or impact to make a story more impressive.

Before completing content work, ask of every concrete claim: “Where did this information come from?” Record source IDs in structured data and describe verification in the PR. Inspect numbers especially carefully. Remove or revise anything without evidence. Automated checks cannot prove that copy is true; perform this review manually.

Do not use external research to supplement biography without the owner's explicit authorization. Technical documentation research is allowed. Never generate screenshots, logos, branding, awards, or other evidence and present it as authentic. Label temporary placeholders visibly, omit unavailable assets, or ask for them.

## Autonomy and design

Choose components, responsive behavior, CSS, purposeful motion, accessibility improvements, performance work, organization, testing, and refactoring independently within the agreed direction. Propose creative layouts and challenge weak choices with reasons. You may remove elements.

Ask before introducing unsupported personal claims, changing the approved visual direction substantially, or resolving a meaningful product/design choice without sufficient evidence. Missing optional content can be omitted. Do not block routine engineering on approval.

Build within the approved direction recorded in `docs/DESIGN.md` and D006. For any substantially new design direction, follow discovery → distinct concepts → owner selection/refinement → structure → implementation → critique → validation in `docs/DESIGN.md`. Do not implement from assumptions.

## Engineering boundaries

Keep personal facts in `src/data/`, with provenance, and render them from components. Metadata, alt text, social previews, and downloadable assets also need factual verification. Use semantic HTML, visible focus, sensible headings, native controls, keyboard access, sufficient contrast, meaningful alt text, and reduced motion. Adapt layouts deliberately for desktop, laptop, tablet, and mobile.

Keep components small and understandable without fragmenting every element. Use strict TypeScript and predictable local state. Prefer platform capabilities, plain CSS, and direct code over unnecessary providers, abstractions, dependencies, or enterprise infrastructure. Avoid giant components, duplicated facts, dead code, unexplained magic numbers, and comments that repeat obvious code.

Before adding a dependency, assess native/framework alternatives, maintenance, simplification, bundle/runtime cost, and whether another developer can understand its purpose. Record significant choices in `docs/DECISIONS.md`. Optimize imagery, font loading, JavaScript, animation work, layout stability, and rendering cost before adding effects.

## Git workflow and completion

Normal work follows `main → branch → development → validation → logical commits → push → PR → review/merge`. Inspect the branch before substantial work. Create a scoped `feature/`, `fix/`, `refactor/`, `docs/`, or `chore/` branch; continue an existing task branch when appropriate. Do not develop normal features directly on `main`. Never force-push, rewrite shared history, or merge your own PR without explicit authorization.

Commit coherent completed units throughout implementation, not every edit and not the whole website at once. Use meaningful messages such as `feat: add responsive portfolio navigation`, `fix: respect reduced motion preference`, or `docs: document portfolio content rules`. Before each commit review the diff, relevant checks, provenance, accidental changes, secrets, and local-only files.

For each feature:

1. Read relevant context, inspect branch/worktree, understand the request, verify content, and create/confirm the task branch.
2. Plan and implement a coherent unit; review visually and technically.
3. Run relevant validation in `docs/DEVELOPMENT.md`; review the complete diff and claim provenance.
4. Commit logical units. Push the branch and create a descriptive PR when tooling/authentication permits; use `.github/pull_request_template.md`.
5. Report implementation, actual validation results, screenshots when available, and unresolved concerns. If remote work is blocked, leave commits and an accurate PR draft; report the blocker instead of pretending a PR exists.

For significant UI work, perform the anti-generic-design critique in `docs/DESIGN.md` and responsive, keyboard, reduced-motion, link, console, accessibility, and performance checks. Distinguish checks run from checks pending.

## Maintain continuity

Update documentation alongside behavior. Record significant architecture/design decisions, approved direction, and navigation/project presentation choices in `docs/DECISIONS.md`. Register owner-approved new factual sources in `docs/CONTENT.md` with exact scope and evidence of approval. Keep references in `docs/REFERENCES.md` and agreed interaction behavior in `docs/INTERACTIONS.md`. Leave task status, validation, and remaining work in commits/PRs or the decision log when it affects future sessions; chat history is not required context.
