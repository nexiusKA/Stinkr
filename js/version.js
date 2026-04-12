// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '32',
    sha:    '2cafc5e51a9332e21a9383c41c77715c463fe5a2',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
