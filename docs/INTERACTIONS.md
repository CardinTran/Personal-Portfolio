# Interaction principles

No elaborate interaction system is approved or implemented. The shell has no animation. Add behavior only when it reinforces hierarchy, communicates state, improves navigation, reveals useful information, provides feedback, or meaningfully contributes to identity.

Prefer native browser behavior and CSS transitions. Add an animation library only when the interaction needs capabilities that justify its maintenance and runtime cost; record that decision. Keep behavior understandable and resilient if scripts fail. Core content must not depend on animation or hover to become available.

## Motion and input requirements

- Honor `prefers-reduced-motion: reduce`: remove nonessential movement, parallax, scroll reveals, animated backgrounds, and smooth scrolling. Replace motion feedback with an immediate/static state when needed. Test with the preference enabled.
- Keep keyboard and touch equivalents for pointer interactions. Show visible focus and never trap focus accidentally.
- Preserve reading order and focus through responsive changes. Use links for navigation and buttons for actions.
- If modal navigation is introduced, specify open/close state, Escape handling, focus placement, focus return, and background interaction behavior.
- Avoid continuous motion and unnecessary animation work; prefer transform/opacity for purposeful motion and reserve layout space.
- Feedback should be brief and understandable, not delay navigation. Do not introduce flashing content.

## Document an approved interaction

Record the affected component, user purpose, trigger, states, keyboard/touch behavior, reduced-motion alternative, duration/easing rationale if relevant, and verification performed. Keep this file aligned with shipped behavior rather than speculative effects.
