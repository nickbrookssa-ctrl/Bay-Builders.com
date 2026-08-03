# Palette Journal

## 2024-08-03 - Accessible Asset Preloaders for High-Asset Animation Sequences
**Learning:**
In websites featuring heavy scroll-based image sequences, a significant UX dead zone exists during initial asset loading. Simply displaying a static frame or blank background during preloading harms user confidence.
To resolve this elegantly and accessibly:
1. Provide a minimalist, semantic loader overlay with `role="progressbar"`, explicit accessibility attributes (`aria-label`, `aria-valuemin="0"`, `aria-valuemax="100"`), and dynamically updated `aria-valuenow` properties.
2. Avoid using high-frequency screen-reader notifications (`aria-live="polite"` or `"assertive"`) on continuously-updating loaders to avoid overwhelming assistive technology users.
3. Prevent infinite loading freeze states by registering onload, onerror, and onabort handlers *before* assigning `src` (to prevent cache race conditions), and resolve the preload sequence regardless of image-specific errors/aborts.
4. Cleanly synchronize CSS opacity fade-outs (e.g., `transition: opacity 0.5s ease`) with JavaScript DOM disposal using `setTimeout(() => element.remove(), 500)` to improve browser memory/layout performance.

**Action:**
Always implement robust preloading state visuals for media-heavy experiences, ensuring that the preloader is fully accessible, fault-tolerant to network failures, and completely removed from the AOM and DOM after fading out.
