import * as bootstrap from 'bootstrap'

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNavDropdown');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

function executeWhenVisible() {
  if (menuToggle.classList.contains('show')) {
    bsCollapse.toggle();
  }
}

navLinks.forEach((l) => {
  l.addEventListener('click', executeWhenVisible);
});
