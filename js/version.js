// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '2',
    sha:    'bf2ab8d54cda5c51e25559af4eb869d0c421e5f1',
    branch: 'main',
    date:   '2026-04-08',
  };
})();
