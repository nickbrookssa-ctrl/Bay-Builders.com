## 2025-05-15 - Progress Feedback and DOM Hygiene
**Learning:** For high-asset sites (like those preloading image sequences), providing a minimalist progress bar with proper ARIA attributes (`role="progressbar"`) significantly improves the UX by reducing perceived load time. Using `element.remove()` instead of `display: none` ensures the DOM remains clean and prevents screen readers from discovering "hidden" loading elements.
**Action:** Always pair visual loaders with `aria-valuenow` updates and use `setTimeout` to match CSS transitions before calling `element.remove()`.

## 2025-05-15 - Contact Accessibility
**Learning:** Mobile users benefit significantly from interactive `tel:` links. Using `color: inherit` and `text-decoration: underline` maintains brand consistency without introducing new design tokens.
**Action:** Implement phone numbers as interactive links using standard CSS decorations to respect the existing design system.
