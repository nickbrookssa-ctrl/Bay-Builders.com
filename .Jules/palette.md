# Palette Journal

## 2026-07-22 - Non-Blocking High-Asset Preloader
**Learning:** For web pages relying heavily on scroll-driven image sequences, a lack of progress visualization causes UX "dead zones". Implementing a semantic progressbar with DOM removal (rather than CSS display:none) satisfies both visual feedback and strict accessibility checks. Preventing race conditions when preloading images in JavaScript requires attaching event handlers (`onload`, `onerror`, `onabort`) *before* assigning the `src` attribute.
**Action:** When preloading assets dynamically via loops, initialize loader DOM lookups once outside the loop. Use inclusive bounds `>=` for counting completion, handle failure/abort callbacks to prevent infinite loading states, and remove the loader element after fading out to avoid blocking underlying elements.
