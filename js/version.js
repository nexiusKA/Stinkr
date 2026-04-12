// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '10',
    sha:    '1ec233fd1e400e9fbf1492b798e397f13894c671',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
