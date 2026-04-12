// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '31',
    sha:    '608c27448a749d37ac72f85a7b2531de4b5d025d',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
