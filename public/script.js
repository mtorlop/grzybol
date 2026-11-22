
/* GRZYBOL - obsluga menu mobilnego */

if (!window.grzybolMenuInitialized) {
  window.grzybolMenuInitialized = true;

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const toggle = event.target.closest('.menu-toggle');
    if (!toggle) return;

    const menu = document.getElementById('main-nav');
    if (!menu) return;

    const open = menu.classList.toggle('is-open');

    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'ZAMKNIJ ✕' : 'MENU ☰';
  });
}
