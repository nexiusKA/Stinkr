// ── version.js ───────────────────────────────────────────────
// Build metadata — overwritten by CI on each release build.
// In local dev this file is used as-is (all fields read "dev").
const BUILD_INFO = (function () {
  return {
    run:    '5',
    sha:    '50fed6f56b15de813a9faaa3fe366d63e5260c53',
    branch: 'main',
    date:   '2026-04-08',
  };
})();
