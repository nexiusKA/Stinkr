// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '24',
    sha:    '5538793f45dc2d33c0afc6a78324225cb0b86aab',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
