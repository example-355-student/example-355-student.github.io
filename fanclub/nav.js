document.addEventListener('DOMContentLoaded', function () {
  const navs = document.querySelectorAll('.nav');

  navs.forEach(nav => {
    const dropdowns = nav.querySelectorAll('.dropdown');
    const hamburger = nav.querySelector('.hamburger');
    const navItems = nav.querySelector('.nav-items');

    // Dropdown click behavior (works for desktop & mobile)
    dropdowns.forEach(dd => {
      const btn = dd.querySelector('.dropbtn');
      if (!btn) return;

      btn.addEventListener('click', function (e) {
        // On mobile, let this toggle the submenu; on desktop this will also toggle for keyboard users.
        e.preventDefault();
        const isOpen = dd.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        // close other dropdowns within the same nav
        dropdowns.forEach(other => {
          if (other !== dd) {
            other.classList.remove('open');
            const obtn = other.querySelector('.dropbtn');
            if (obtn) obtn.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });

    // Hamburger toggles mobile menu
    if (hamburger) {
      hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        const isOpen = nav.classList.toggle('mobile-open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        // when opening mobile menu, remove any open dropdowns (they can be reopened inside mobile)
        if (isOpen) {
          dropdowns.forEach(dd => {
            dd.classList.remove('open');
            const btn = dd.querySelector('.dropbtn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
        }
      });
    }

    // Close dropdowns and mobile menu when clicking outside this nav
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav')) {
        // close mobile menus and dropdowns across all navs
        navs.forEach(n => {
          n.classList.remove('mobile-open');
          const hb = n.querySelector('.hamburger');
          if (hb) hb.setAttribute('aria-expanded', 'false');
          const ddList = n.querySelectorAll('.dropdown');
          ddList.forEach(dd => {
            dd.classList.remove('open');
            const btn = dd.querySelector('.dropbtn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
        });
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navs.forEach(n => {
          n.classList.remove('mobile-open');
          const hb = n.querySelector('.hamburger');
          if (hb) hb.setAttribute('aria-expanded', 'false');
          const ddList = n.querySelectorAll('.dropdown');
          ddList.forEach(dd => {
            dd.classList.remove('open');
            const btn = dd.querySelector('.dropbtn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
        });
      }
    });
  });
});
