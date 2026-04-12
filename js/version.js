// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '13',
    sha:    'c5ed645966d00cc4c03bcd40e185f64dee73d859',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
