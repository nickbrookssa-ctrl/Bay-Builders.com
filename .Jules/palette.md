## 2025-05-15 - Robust Image Preloading
**Learning:** When preloading a large number of images via JavaScript, assigning the `src` attribute *after* attaching event handlers (`onload`, `onerror`, `onabort`) is critical. If the images are cached, they might trigger the `onload` event immediately upon setting `src`, potentially before the handler is even registered if done in the wrong order.
**Action:** Always attach image event listeners before setting the `src` property to ensure every load/error state is captured and the progress tracking remains accurate.
