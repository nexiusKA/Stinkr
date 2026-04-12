// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '25',
    sha:    'ca71b815e5b290fe32bc2ffddacda68efc8d9622',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
