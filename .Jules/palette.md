# Palette Journal

## 2026-07-20 - Interactive Contact Links Design Pattern
**Learning:** For landing pages or construction sites, plain-text contact information acts as a UX dead zone, especially on mobile device viewports where user friction is high. Wrapping telephone numbers in explicit `tel:` URLs styled with `color: inherit` and native underlines preserves styling while providing immediate interactivity.
**Action:** Always wrap static contact phone numbers in `tel:` links using design-system-compliant styles and provide a custom focus outline targeting `:focus-visible` with the exact brand accent color (e.g. `#ff5a1f`) to maintain high keyboard accessibility standards without cluttering CSS.
