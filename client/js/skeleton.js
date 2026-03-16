/**
 * skeleton-loader.js
 * ──────────────────
 * Call hideSkeleton() once your data is fully rendered into the DOM.
 *
 * Usage in ai-details.js — at the very end of your existing script, add:
 *
 *   import { hideSkeleton } from "./skeleton-loader.js";
 *   hideSkeleton();
 *
 * Or, if you don't want to use ES module imports, just call
 *   window.hideSkeleton?.()
 * from the bottom of ai-details.js after all DOM mutations are done.
 */

const REAL_CONTENT_SELECTORS = [
  ".breadcrumb",
  ".tool-header",
  ".two-col",
];

/** Hide skeleton, reveal real content with a smooth fade. */
export function hideSkeleton() {
  const skeleton = document.getElementById("skeletonLoader");

  // Fade out skeleton
  if (skeleton) {
    skeleton.style.transition = "opacity 0.25s ease";
    skeleton.style.opacity = "0";
    setTimeout(() => {
      skeleton.style.display = "none";
    }, 260);
  }

  // Fade in real content
  REAL_CONTENT_SELECTORS.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = "0";
    el.style.display = "";             // make sure it's not hidden
    el.style.transition = `opacity 0.3s ease ${i * 60}ms`;
    // Trigger reflow so transition plays
    void el.offsetHeight;
    el.style.opacity = "1";
  });
}

/** Show skeleton again (useful for navigating between tools without a page reload). */
export function showSkeleton() {
  const skeleton = document.getElementById("skeletonLoader");
  if (skeleton) {
    skeleton.style.opacity = "1";
    skeleton.style.display = "";
  }

  REAL_CONTENT_SELECTORS.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) el.style.opacity = "0";
  });
}