// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '8',
    sha:    '42660be0fb9de4144a65b838ad268afd873fdad4',
    branch: 'main',
    date:   '2026-04-12',
  };
})();
