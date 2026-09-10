/* Ektar site chrome: magnetic product nav + light/dark theme.
   Plain JS. Safe to evaluate more than once — every step is idempotent, and the
   stored preference is the single source of truth (the DOM can be re-rendered
   under us while the page streams). */
(function () {
  var KEY = 'ektar-theme';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; } catch (e) { return 'dark'; }
  }

  function apply(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (document.body) document.body.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
      if (document.body) document.body.removeAttribute('data-theme');
    }
  }

  apply(stored());

  function wireTheme() {
    apply(stored());
    var btn = document.querySelector('.themebtn');
    if (!btn || btn.__ekWired) return;
    btn.__ekWired = true;
    btn.addEventListener('click', function () {
      var next = stored() === 'light' ? 'dark' : 'light';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
  }

  function wireNav() {
    var nav = document.querySelector('.pnav');
    if (!nav || nav.__ekWired) return;
    nav.__ekWired = true;

    var block = nav.querySelector('.pblock');
    function strip() { return document.querySelector('.navstrip'); }

    function links() { return Array.prototype.slice.call(nav.querySelectorAll('a.top')); }

    function current() {
      var all = links();
      for (var i = 0; i < all.length; i++) if (all[i].getAttribute('aria-current')) return all[i];
      return null;
    }

    function clear() {
      if (block) { block.style.width = '0px'; block.style.opacity = '0'; }
      var s = strip();
      if (!s) return;
      var key = s.querySelector('.key');
      var val = s.querySelector('.val');
      if (key) key.textContent = nav.dataset.defaultRole || 'Seven products';
      if (val) val.textContent = nav.dataset.defaultLine || 'One decision engine — ekRules weighs every signal the three surfaces emit.';
    }

    function move(el) {
      if (!block || !el || !el.offsetWidth) return;
      var r = el.getBoundingClientRect();
      var nr = nav.getBoundingClientRect();
      block.style.opacity = '1';
      block.style.width = r.width + 'px';
      block.style.transform = 'translateX(' + (r.left - nr.left) + 'px)';
    }

    function fill(el) {
      var s = strip();
      if (!s || !el) return;
      var key = s.querySelector('.key');
      var val = s.querySelector('.val');
      if (key) key.textContent = el.dataset.role || '';
      if (val) {
        val.textContent = el.dataset.line || '';
        val.classList.remove('fade');
        void val.offsetWidth;
        val.classList.add('fade');
      }
    }

    function settle() {
      var c = current();
      if (!c) { clear(); return; }
      move(c);
      fill(c);
    }

    nav.addEventListener('mouseover', function (e) {
      var a = e.target.closest ? e.target.closest('a.top') : null;
      if (a && nav.contains(a)) { move(a); fill(a); }
    });
    nav.addEventListener('focusin', function (e) {
      var a = e.target.closest ? e.target.closest('a.top') : null;
      if (a && nav.contains(a)) { move(a); fill(a); }
    });
    nav.addEventListener('mouseleave', settle);
    window.addEventListener('resize', settle);

    /* the nav is hidden below 1100px, so measure again whenever its box changes */
    if (window.ResizeObserver) new ResizeObserver(settle).observe(nav);

    requestAnimationFrame(settle);
    setTimeout(settle, 400);
    setTimeout(settle, 1200);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
  }

  function wire() { wireTheme(); wireNav(); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();

  if (!window.__ekChromeObserver) {
    window.__ekChromeObserver = new MutationObserver(wire);
    window.__ekChromeObserver.observe(root, { childList: true, subtree: true });
  }
})();
