// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '3',
    sha:    '87639bcd6ece85908618bedbc69d73b0f42be929',
    branch: 'main',
    date:   '2026-04-08',
  };
})();
