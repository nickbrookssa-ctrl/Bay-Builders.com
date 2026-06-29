## 2025-05-14 - Preloading Progress Indicator
**Learning:** For high-asset-count static sites (e.g., scroll-driven image sequences), a blank initial state is perceived as a "dead" page. Providing a minimalist, brand-aligned progress bar with ARIA attributes improves perceived performance and accessibility.
**Action:** Implement `#loader` with `role="progressbar"` and synchronize DOM removal (`element.remove()`) with CSS transitions to maintain DOM hygiene.
