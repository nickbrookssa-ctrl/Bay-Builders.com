## 2025-05-14 - Loading States for Heavy Asset Sites
**Learning:** For sites relying on heavy assets like Three.js or large image sequences (200+ frames), a visual loader is critical to prevent the user from perceiving the site as broken or unresponsive.
**Action:** Always implement a minimalist loader with `role="progressbar"` and ensure it is removed from the DOM after assets are ready.

## 2025-05-14 - Canvas Accessibility
**Learning:** Canvas elements are invisible to screen readers by default. Providing a `role="img"` and `aria-label` allows users with visual impairments to understand the context of the animation.
**Action:** Apply descriptive ARIA labels to canvas elements that provide core visual value.
