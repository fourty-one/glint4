import vars from '../_vars';

function openMenu() {
  vars.$overlay.classList.add('overlay-up');
  vars.$nav.classList.add('nav-open');
}

function closeMenu() {
  vars.$nav.classList.remove('nav-open');
  vars.$overlay.classList.remove('overlay-up');
}

vars.$menuOpenButton.onclick = openMenu;

[vars.$overlay, vars.$menuCloseButton, ...vars.$navLinks]
  .map(el => el.onclick = closeMenu);