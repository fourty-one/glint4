import vars from '../_vars';

window.openMenu = function() {
  vars.$overlay.classList.add('overlay-up')
  vars.$nav.classList.add('nav-open')
}

window.closeMenu = function() {
  vars.$nav.classList.remove('nav-open')
  vars.$overlay.classList.remove('overlay-up')
}