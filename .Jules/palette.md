## 2025-08-11 - Asset Preloading Dead Zones
**Learning:** High-asset sequence sites suffer from heavy interactive dead zones during initial load if they lack structured preloading UI. Accessible, performant loaders with semantic progress indicators are essential to retain user trust.
**Action:** Implement minimalist progress indicators with role="progressbar" and appropriate ARIA attributes. Register event handlers prior to source assignment to bypass caching races, and cleanly remove elements after use.
