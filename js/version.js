// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '29',
    sha:    '50af75af8977fff54d211e9ea4891e01bedd2603',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
