(() => {
  'use strict';
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  onReady(() => {
    const btn = document.getElementById('discordCopy');
    if (!btn) return;
    const username = btn.dataset.username || '@meesteryumyum';

    btn.addEventListener('click', async () => {
      try {
        const ok = await window.copyText(username);
        window.showToast(ok
          ? `Copied ${username} to clipboard`
          : `Could not copy. ${username}`);
      } catch {
        window.showToast(`Could not copy. ${username}`);
      }
    });
  });
})();