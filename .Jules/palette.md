## 2025-05-14 - Asset Preloading Feedback
**Learning:** Preloading a large number of assets (240 frames) without visual feedback creates a "dead" period where the UI is unresponsive and seems broken. High-frequency updates should avoid `aria-live="polite"` to prevent screen reader noise.
**Action:** Implement a minimalist loader using `role="progressbar"` with dynamic `aria-valuenow` updates and ensure it's removed from the DOM after use to maintain hygiene.
