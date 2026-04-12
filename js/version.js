// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '14',
    sha:    'c73172d3d617479229a0c19d1c95262995705d84',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
