(function (global) {
  'use strict';
  let timer;
  function showToast(message, opts = {}) {
    const { selector = '#toast', duration = 1800 } = opts;
    const el = document.querySelector(selector);
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => el.classList.remove('show'), duration);
  }
  global.showToast = showToast; // expose as window.showToast
})(window);