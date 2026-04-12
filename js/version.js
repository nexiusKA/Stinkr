// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '27',
    sha:    'daea80b9dcbb1636bfa480810a7fa77736391d57',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
