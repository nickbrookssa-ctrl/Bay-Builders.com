## 2026-07-04 - Minimalist Preloading Loader
**Learning:** For asset-heavy sites (240+ frames), a minimalist loader with `role="progressbar"` and `aria-valuenow` significantly improves perceived performance and accessibility.
**Action:** Always implement a progress indicator when preloading assets via JavaScript, ensuring it's removed from DOM after lifecycle completion.
