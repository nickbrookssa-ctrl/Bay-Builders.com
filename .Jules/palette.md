## 2025-05-14 - Asset Preloading Progress
**Learning:** Large scroll-driven animations (240+ images) create a "broken" experience if assets aren't preloaded with user feedback. A simple progress bar improves perceived performance and prevents interaction jank.
**Action:** Always implement a progress-based loader with role="progressbar" for heavy asset sequences and ensure it is removed (element.remove()) after completion.
