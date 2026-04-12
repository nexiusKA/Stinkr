// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '19',
    sha:    'beee978acd8d222f6a1b7ec6e621991790ebacf1',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
