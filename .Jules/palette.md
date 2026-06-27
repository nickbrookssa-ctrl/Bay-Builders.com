## 2025-05-15 - Premium Loading Experience for Asset-Heavy Sites
**Learning:** Sites relying on large image sequences (like 240+ frames) feel broken during initial load if no feedback is provided. Additionally, failing to handle 'onerror' or 'onabort' on preloaded assets can lead to an infinite loading state.
**Action:** Always implement a minimalist, brand-aligned loader with 'role="progressbar"' for heavy asset preloading. Ensure all asset promises resolve even on failure to guarantee the site remains interactive.
