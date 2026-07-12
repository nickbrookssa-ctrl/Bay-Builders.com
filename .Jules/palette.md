## 2025-05-14 - Loading State for High-Asset Sequences
**Learning:** For landing pages with heavy asset preloading (e.g., 240+ image frames), a blank screen during the initial load creates a "broken" first impression. Implementing a branded loader with ARIA progress indicators improves perceived performance and accessibility.
**Action:** Always audit for high-asset sequences and implement a minimalist loader with `role="progressbar"` and real-time percentage updates.
