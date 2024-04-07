const headerNavItem = document.querySelectorAll('.header-nav-item');
const currentPage = `.${document.location.pathname}`;
for (const element of headerNavItem) {
  if (element.firstElementChild.getAttribute('href') === currentPage) {
    element.firstElementChild.style.color = '#6C5FBC';
  }
}
