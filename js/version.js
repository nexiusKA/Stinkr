// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '26',
    sha:    '1d0cd2a5d04c3831ce7bb06579cc5eeaf8fb1cd2',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
