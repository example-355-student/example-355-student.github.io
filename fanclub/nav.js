document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.nav .dropdown');

  dropdowns.forEach(dd => {
    const btn = dd.querySelector('.dropbtn');

    if (!btn) return;

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const isOpen = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      // close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dd) {
          other.classList.remove('open');
          const obtn = other.querySelector('.dropbtn');
          if (obtn) obtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav .dropdown')) {
      dropdowns.forEach(dd => {
        dd.classList.remove('open');
        const btn = dd.querySelector('.dropbtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdowns.forEach(dd => {
        dd.classList.remove('open');
        const btn = dd.querySelector('.dropbtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
