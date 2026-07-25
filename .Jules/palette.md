## 2026-07-25 - Scroll-Driven Canvas Animation Accessibility and Preloading UX

**Learning:** Large scroll-driven canvas animations cause heavy initial asset loads (240+ frames), creating a "dead zone" on slow networks. Adding an ARIA-compliant progress bar with `role="progressbar"` manages user expectations. Crucially, mapping dynamic JS loading progress to CSS custom properties (e.g. `--progress`) with high-frequency updates on `aria-valuenow` (while keeping `aria-live` off to prevent screen reader noise) delivers a perfectly balanced tactile loading experience.

**Action:** Always implement a lightweight, zero-dependency, screen-reader-visible `<noscript>`-friendly progress overlay for sequential frame loading, updating layout transitions dynamically via custom CSS properties, and fully cleaning up (removing) loading elements from the DOM after transitions.
