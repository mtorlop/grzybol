// Prosta obsługa menu na telefonie.
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'ZAMKNIJ ✕' : 'MENU ☰';
  });
}
