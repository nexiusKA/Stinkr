// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '22',
    sha:    '3169d334e09f4545e92887864260c6feb9f439f7',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
