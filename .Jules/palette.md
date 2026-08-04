# Palette's Journal

## 2025-02-15 - High-Asset Sequence Loading & UX Dead Zones
**Learning:** For heavy-asset sequence landing pages (like 240+ images), preloading leaves a blank visual 'dead zone' during initial load. Implementing a minimalist, high-z-index branded progress indicator with proper ARIA accessibility reduces perceived load time and improves screen reader transparency without creating excessive screen reader noise.
**Action:** Always implement a loader overlay with `role="progressbar"`, explicit top/left dimensions, and a brand accent background matching the main canvas context.
