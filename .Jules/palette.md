# Palette Journal

## 2024-07-28 - Heavy Scroll Asset Preloading UX
**Learning:** For heavy scroll-based canvas animations, preloading assets (e.g. hundreds of image frames) without a custom progress indicator creates a "dead zone" where users scroll on a blank or static page without feedback, hurting initial engagement and perceived performance. Adding a minimalist ARIA-compliant progress bar with smooth transitions solves this.
**Action:** Implement a progress overlay with `role="progressbar"`, update `aria-valuenow` dynamically, cache DOM queries outside high-frequency loops, assign `src` *after* attaching event handlers (including fallback onerror/onabort) to avoid cache race conditions, and use `element.remove()` to clean up the DOM once the load finishes.
