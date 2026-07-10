## 2025-05-14 - Branded Loading Experience
**Learning:** For asset-heavy sites (like those preloading 240+ frames), a minimalist, branded progress bar improves the initial UX by providing feedback during mandatory delays. Using ARIA attributes like `role="progressbar"` and `aria-valuenow` ensures the state is perceivable by assistive technologies.
**Action:** Always implement a progress indicator for asynchronous asset preloading, and ensure it smoothly transitions out of the DOM once complete.
