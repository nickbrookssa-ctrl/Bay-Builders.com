## 2025-01-24 - [Asset Preloading Progress Feedback]
**Learning:** Sites preloading large image sequences (e.g., for scroll animations) can appear broken or unresponsive if the sequence takes several seconds to load without feedback. Providing a minimalist progress bar with 'role="progressbar"' ensures both sighted and screen-reader users are aware of the background activity.
**Action:** Always implement a progress indicator for heavy asset preloading tasks (>50 assets) using dynamic ARIA attributes for accessibility.
