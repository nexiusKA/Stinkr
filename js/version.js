// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '16',
    sha:    '0e2f71f44e8e1fc27f99d4ca2a4daeb9f73d6411',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
