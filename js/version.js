// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '9',
    sha:    'b8a72b4455abac3a94a13696938577b456b4c2bd',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
