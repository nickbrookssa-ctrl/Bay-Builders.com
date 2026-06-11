## 2024-06-11 - [Affordance for Long Landing Pages]
**Learning:** For minimalist "hero-focused" landing pages with significant scroll depth (e.g., 500vh), users may miss content without a visual cue. A subtle, pulsing "Scroll" hint provides the necessary affordance without cluttering the design.
**Action:** Include a scroll indicator when the landing page design hides the existence of below-the-fold content.

## 2024-06-11 - [Accessible Contact Links]
**Learning:** Turning static phone numbers into `tel:` links significantly improves mobile UX. Using `.contact-link` for high-contrast hover/focus states ensures accessibility for keyboard users and those with low vision.
**Action:** Always wrap contact details in interactive links with explicit `aria-label` descriptions and distinct focus states.
