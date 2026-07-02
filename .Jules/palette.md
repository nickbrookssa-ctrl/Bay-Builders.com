## 2026-07-02 - [Preloading UX & Resilience]
**Learning:** For heavy asset preloading (e.g., 240+ frames), providing visual progress feedback is critical to prevent the perception of a broken site. To ensure reliability, `onerror` and `onabort` handlers must be attached to every asset load promise to prevent the UI from being stuck in a permanent loading state if individual assets fail.
**Action:** Always include error handling in asset preloading loops and use `<noscript>` fallbacks to ensure JS-dependent loaders don't block users with scripts disabled.
