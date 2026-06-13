# Palette's Journal - Critical UX Learnings

## 2024-06-13 - [Heavy Preloading Feedback]
**Learning:** In frame-based scroll animations utilizing a high volume of images (e.g., 240+ frames), the absence of a loading indicator creates a significant "perceived performance" gap. Users on average-to-slow connections may perceive the site as broken or unresponsive during the multi-second preloading phase, leading to immediate bounce.
**Action:** Always implement a minimalist, progress-aware loader with appropriate ARIA roles (`progressbar`) for any sequence preloading more than 50 assets to maintain user trust and ensure accessibility.
