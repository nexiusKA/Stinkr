// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '18',
    sha:    'e73162feac97b2ef780dd8cf69aa2b8072347745',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
