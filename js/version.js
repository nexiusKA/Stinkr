// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '33',
    sha:    '88206814b58609fdcde347bc5a25ce944439e4a5',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
