## 2025-05-15 - Progress Feedback for Heavy Asset Preloading
**Learning:** Preloading a high volume of assets (e.g., 240+ images for a scroll animation) without visual feedback creates a "frozen" user experience on slower connections. Users may perceive the site as broken if there's no indication of background activity.
**Action:** Implement a minimalist, non-obtrusive progress bar with `role="progressbar"` and `aria-valuenow`. Use `element.remove()` instead of just hiding the element after completion to keep the DOM and Accessibility Object Model clean.
