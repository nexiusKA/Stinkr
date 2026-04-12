// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '15',
    sha:    '0727b552b917352be431975f71ff5964b1e15935',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
