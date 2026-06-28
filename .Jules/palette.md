## 2026-06-28 - Semantic Wrapper Pattern
**Learning:** Landing pages with complex background animations (like Three.js or high-frequency frame sequences) often lack semantic structure, making them difficult for screen readers to parse. Wrapping the primary UI in a `<main>` landmark and applying `role="img"` with an `aria-label` to the background `<canvas>` ensures the page is both perceivable and navigable.
**Action:** Always wrap primary site content in a `<main>` landmark and ensure background visuals are correctly labeled or hidden from the AOM.

## 2026-06-28 - Mobile Interaction Hygiene
**Learning:** Static phone numbers on construction or service-based landing pages are a significant friction point for mobile users. Using `tel:` links with `color: inherit` and custom focus states provides immediate utility without disrupting the brand's aesthetic.
**Action:** Implement phone numbers as interactive 'tel:' links using the '.contact-link' class to maintain design consistency.
