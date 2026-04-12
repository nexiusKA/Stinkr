// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '34',
    sha:    '51cc86e5e1eaae4774edeb6165ae41661f30aea7',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
