// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '11',
    sha:    '5882e916c06766de14d68d5c67b2549627c90f5b',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
