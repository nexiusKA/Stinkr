// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '12',
    sha:    '3a9ee870e1b8a8add766afa675227e187f7e919b',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
