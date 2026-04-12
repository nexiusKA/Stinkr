// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '23',
    sha:    'c2ed6b6af4013108e2853b617be792a7c5b7490a',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
