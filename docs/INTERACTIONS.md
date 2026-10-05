# Interaction principles

The site has one approved interaction (below) and no animation. Add behavior only when it reinforces hierarchy, communicates state, improves navigation, reveals useful information, provides feedback, or meaningfully contributes to identity.

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

## Hero frame diagram (D006)

- **Component:** `src/components/frames/FramesDiagram.tsx`.
- **Purpose:** show the same target pose expressed in a Unity world frame and a robot base frame, which is the translation problem in The Wanderer's resume bullets. The diagram is an illustration, not project evidence; its caption says so.
- **Triggers:** pointer drag on the canvas moves the target in its current horizontal plane. Three native range inputs (Unity x, y, z, in metres) set it directly; these are the keyboard, touch, and assistive-technology control.
- **States:** the readouts update on every change, and the robot readout reports “within reach” or “outside reach” against an illustrative 0.9 m limit. The cursor shows grab and grabbing.
- **Motion:** none. The canvas redraws only on input, resize, or font load, so reduced motion needs no alternative.
- **Accessibility:** the canvas is `role="img"` with a description. Sliders expose `aria-valuetext` in metres. The readouts are visible text, deliberately not live regions, so slider movement does not flood announcements.
- **Verification:** geometry unit tests (projection round trip, axis mapping, handedness, reach). Headless renders at 1440 px and 390 px. An interactive keyboard and screen-reader pass is pending.
