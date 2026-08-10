# Palette Journal

## 2024-08-10 - ARIA Hiding background visual assets and Semantic Contact Elements
**Learning:** Overly busy background canvas renderings can clutter the screen reader experience. Explicitly hiding decorative wrappers via `aria-hidden="true"` and converting plain lists/phone contacts into semantic structures (`<ul>` and `tel:` links with proper class inheritance) provides a cleaner, highly accessible navigation flow without style breakage.
**Action:** Always set `aria-hidden="true"` on canvas or WebGL wrappers, use HTML list elements for inline dot-separated strings, and use `tel:` links with class `.contact-link` matching parent colors for clean interactivity.
