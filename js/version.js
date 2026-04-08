// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '6',
    sha:    'bec131ead212fa938b22068a4d74c75679d6575c',
    branch: 'main',
    date:   '2026-04-08',
  };
})();
