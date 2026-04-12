// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '17',
    sha:    '4d9d24a68d7fb4bd228f762797759cb518a8560d',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
