## 2026-06-08 - [Accessible Progress Indicators]
**Learning:** Custom progress indicators for heavy asset preloading (like 240+ images) should always use standard ARIA roles like `progressbar` and dynamic `aria-valuenow` updates to prevent screen readers from perceiving the app as "frozen" during the initial load.
**Action:** Use `role="progressbar"` and sync `aria-valuenow` with loading percentage in all future preloading implementations.
