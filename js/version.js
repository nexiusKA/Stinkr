// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '7',
    sha:    'a846576d579faf45cf4efee97d4a2d62c01432b4',
    branch: 'main',
    date:   '2026-04-08',
  };
})();
