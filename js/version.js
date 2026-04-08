// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '4',
    sha:    'bd10d54bfd7aaff2584284a64dff93852db7fe79',
    branch: 'main',
    date:   '2026-04-08',
  };
})();
