## 2024-07-09 - Branded Loading Progress Indicators
**Learning:** Implementing a branded progress indicator during heavy asset preloading (e.g., 200+ images) eliminates the "dead zone" of a blank screen, providing critical navigational affordance. Using `role="progressbar"` and `aria-valuenow` ensures the loading state is accessible to screen readers, while `element.remove()` maintains DOM hygiene post-load.
**Action:** Always implement a minimalist, branded loader for applications with high-asset sequences to improve perceived performance and meet basic accessibility standards.
