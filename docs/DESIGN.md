# Design direction and review

Status: direction A, “Two Frames”, selected with a chronological structure (D006). The palette, type, and layout below are the approved direction; the minimal application screen remains a placeholder until implementation lands. Software engineering, AI, and robotics are the owner's intended portfolio scope; factual descriptions still require approved content sources.

## Approved direction — D006

- **Concept:** technical drawing / spec sheet. Off-white paper, near-black ink, and two signal colours carried from the diagram: blue for the virtual (Unity) frame and rust for the physical (robot) frame. Condensed Archivo for display type, IBM Plex Mono for metadata and annotation. No cards, gradients, or shadows; structure comes from rules, numbered labels, and a two-column grid.
- **Hero:** name, a statement leading with robotics then AI, education (Expected May 2027), contact links, and the interactive two-frame diagram. The diagram is a labelled illustration, never project evidence.
- **Work:** one reverse-chronological sequence grouped under year headings (2026, 2025, 2021), mixing experience, projects, and leadership. Within 2026, ongoing robotics and AI entries come first. The order inside a year does not assert start order, because “2026 – Present” has no month.
- **Placeholders:** each project entry reserves a visibly labelled slot for a project visual and a repository link until the owner supplies them.
- **Then:** tools and coursework, then contact.

## Principles

Simple but memorable: strong typography, excellent spacing, clear hierarchy, restrained color, thoughtful composition, purposeful asymmetry, large authentic project visuals when available, subtle interaction, and specific project storytelling. Prefer one memorable concept over unrelated effects. Accessibility, responsive quality, and speed are requirements for any concept.

Before decoration, improve spacing, typography, scale, positioning, composition, imagery, and hierarchy. Removing elements is a valid improvement. Creativity is welcome: unusual layouts, experimental typography, distinctive interactions, and unexpected project presentations can be proposed with clear reasoning.

> Never use a design pattern simply because it is the easiest recognizable "modern portfolio" solution.

## Patterns requiring deliberate justification

Avoid blindly defaulting to purple/blue gradients, gradient text, pervasive glassmorphism, glowing elements, floating gradient blobs, excessive rounded cards, nested cards, generic bento grids, pills everywhere, excessive badges, icon grids, particles, animated backgrounds, oversized centered hero copy with two CTA buttons, “Hi, I'm [name] 👋”, “passionate developer” copy, SaaS landing-page structure, fake terminals, excessive scroll animation or parallax, generic three-card projects, and unnecessary complexity.

These techniques are not individually banned. Explain the purpose and fit of any such choice; popularity or a familiar template is not a reason. Do not imply experience or technical depth through fabricated UI evidence.

## Workflow for major initial design

1. **Discovery:** read `CLAUDE.md`, the resume, `CONTENT.md`, this file, `REFERENCES.md`, `INTERACTIONS.md`, and existing code. Identify approved facts, available assets, missing optional material, and unresolved decisions.
2. **Concept:** propose multiple genuinely different structural directions, with information hierarchy, sample composition, mobile strategy, and reasons they fit the available work. Editorial, engineering, spatial, minimal showcase, research, and typography-led directions are possibilities, not prescriptions. Palette swaps do not count as distinct concepts.
3. **Selection:** let the owner select/refine a direction before major implementation. Record the chosen direction and boundaries in `DECISIONS.md`. Clearly label prototypes as proposals.
4. **Structure:** map approved content to pages/sections, navigation, component boundaries, project presentation, responsive layout, and interaction behavior. Identify required assets before relying on them.
5. **Implementation:** build the approved direction incrementally on feature branches with reviewable commits.
6. **Critique:** use the review below; simplify weak work before adding effects.
7. **Validation:** verify facts, desktop/laptop/tablet/mobile, accessibility, keyboard navigation, reduced motion, performance, links, console, build, lint, formatting, and relevant tests. Capture representative screenshots when supported.

## Anti-generic-design critique

Ask: Does this look like an AI portfolio template? Does it feel specific to the person and work in the resume? Is decoration purposeful? Are there too many cards or rounded containers? Is typography doing enough work? Is spacing intentional and hierarchy clear? Are icons necessary? Do animations improve comprehension? Has mobile been designed rather than compressed? Could something be removed?

Correct in order: remove → simplify → typography → spacing → hierarchy → composition → authentic imagery → add only when necessary. Record material tradeoffs in the PR, not an invented numerical “design score.”

## Accessibility, responsive behavior, performance

Use semantic landmarks, logical headings, native links/buttons, visible focus, keyboard-operable navigation, useful image alternatives, and sufficient contrast. Target WCAG AA contrast (4.5:1 normal text, 3:1 large text); meaningful UI boundaries and focus indicators also need contrast. Use ARIA only when native semantics are insufficient. Ensure mobile navigation is operable, communicates expanded state, and handles focus appropriately if modal.

Evaluate small phones, tablet, laptop, wide desktop, zoom, and long content. Layouts may change structurally; typography, imagery, spacing, and interactions must retain intent. Avoid horizontal overflow and hover-only information. Optimize image dimensions/formats, reserve layout space, defer below-fold imagery appropriately, minimize fonts and JavaScript, and avoid expensive decorative rendering.
