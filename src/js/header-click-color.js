const headerNavItem = document.querySelectorAll('.header-nav-item');
const currentPageArray = document.location.href.split('/');
const currentPage = currentPageArray[currentPageArray.length - 1];
for (const element of headerNavItem) {
  if (element.firstElementChild.getAttribute('href') === `./${currentPage}`) {
    element.firstElementChild.style.color = '#6C5FBC';
    element.classList.add('curent-page');
  }
}

const elHeader = document.querySelector('.header');
elHeader.classList.remove('js-header-animation');
