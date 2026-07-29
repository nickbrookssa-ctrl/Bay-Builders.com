# Palette's Journal

## 2025-07-29 - Brand-Consistent Image Preloader
**Learning:** For landing pages loaded with heavy interactive visual sequences (like 240 scroll frames), leaving the user with a blank screen during initial image sequence load creates a UX "dead zone". A branded, minimalist loader with proper ARIA progressbar roles, structured to avoid race conditions and handle asset-load failures, elevates professional trust and accessibility.
**Action:** Implement a clean, overlay loader matching the Three.js #ff5a1f accent color with ARIA-compliant attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`), assign `src` only after attaching image event handlers, and use CSS `opacity` synchronized with `element.remove()` to maintain DOM hygiene.
