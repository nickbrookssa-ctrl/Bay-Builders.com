# Palette Journal - Bay Builders UX Enhancements

## 2025-05-15 - Improving Pre-initialization Feedback
**Learning:** For landing pages that rely on heavy asset preloading (e.g., 200+ image frames for scroll animations), users often face a "black screen" or unresponsive UI during the first few seconds. A minimalist, non-intrusive progress bar at the top of the viewport reduces bounce rates by signaling active progress.
**Action:** Always implement a lightweight loader with `role="progressbar"` for heavy preloading sequences, ensuring it is removed from the DOM once complete.

## 2025-05-15 - Making Canvas-based Animations Perceivable
**Learning:** High-impact visual animations rendered on `<canvas>` are completely invisible to assistive technologies if not explicitly labeled.
**Action:** Apply `role="img"` and a descriptive `aria-label` to canvas elements that provide significant visual context or brand storytelling.
