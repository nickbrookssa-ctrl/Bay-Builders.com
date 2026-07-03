## 2025-05-15 - Feedback for Heavy Asset Preloading
**Learning:** Sites preloading a large volume of assets (e.g., 200+ image frames) without visual feedback create a "dead" experience where the user is unsure if the site is broken or still loading. A minimalist, accessible progress bar improves perceived performance and reduces bounce rates.
**Action:** Always implement a `role="progressbar"` with dynamic `aria-valuenow` updates when preloading significant image sequences.
