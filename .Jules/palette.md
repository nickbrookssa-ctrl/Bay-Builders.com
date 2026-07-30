# Palette's Journal - Bay Builders

## 2024-07-30 - Initial Loader Implementation
**Learning:** High-asset sequence pages (such as a 240-frame image animation) create UX "dead zones" where users encounter a blank/static screen. Implementing a minimalist, high-index loader with a dynamic progress bar reduces perceived load times and increases accessible status visibility.
**Action:** Always include a fullscreen overlay loader with `role="progressbar"`, dynamic update handling using `onload/onerror/onabort` on images, and a clean exit with synchronized CSS transitions and `element.remove()`.
