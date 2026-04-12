// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '30',
    sha:    '56860a3ca0ec54c053f98ec57835830fceb32fb3',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
