// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '21',
    sha:    'd7e4dbd7b0983a7b73f69b4daa6432262a75cacc',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
