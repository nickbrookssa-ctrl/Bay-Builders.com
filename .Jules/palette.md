## 2023-11-20 - High-Asset Sequence Preloaders
**Learning:** Preloading a high volume of image assets (240 frames) without visual feedback creates a UX 'dead zone' where users see a blank black screen. Adding a semantic preloader with dynamic ARIA attributes (`role="progressbar"`) improves the perception of speed and keeps the page highly accessible during initial load.
**Action:** Implement minimalist loaders with dynamic ARIA progress variables and clean them up from the DOM using `element.remove()` once loaded.
