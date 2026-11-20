/* ==========================================================
   Suliyman Hossain — portfolio · script.js
   Theme toggle + mobile nav. No frameworks, no build step.
   ========================================================== */

(function () {
  'use strict';

  // ——— Theme toggle ———
  const root = document.documentElement;
  const STORAGE_KEY = 'theme';

  // Apply saved theme (default: dark)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) root.setAttribute('data-theme', saved);

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  });

  // ——— Mobile nav ———
  document.querySelectorAll('.menu-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const nav = document.getElementById('nav');
      if (!nav) return;
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // Close mobile nav when a link is clicked
  var navEl = document.getElementById('nav');
  if (navEl) {
    navEl.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navEl.classList.remove('is-open');
        document.querySelectorAll('.menu-btn').forEach(function (b) {
          b.setAttribute('aria-expanded', 'false');
        });
      });
    });
  }

  // ——— Pause video when tab is hidden (saves battery) ———
  var video = document.querySelector('.bg-video');
  if (video) {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(function () { /* autoplay may be blocked */ });
      }
    });
  }
})();
