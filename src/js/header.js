const elHeaderMenuClose = document.querySelector('.js-header-menu-close');
const elHeaderMenuOpen = document.querySelector('.js-header-menu-open');
const elHeaderMenuWrap = document.querySelector('.js-header-menu-wrap');
const elHeaderGuide = document.querySelectorAll('.js-header-guide');

// ---- відкриття модалки ---- //
const handleOpenMenuHeader = () => {
  document.body.style.overflow = 'hidden';
  elHeaderMenuWrap.style.display = 'flex';
  setTimeout(() => {
    elHeaderMenuWrap.style.transform = 'translateX(0%)';
  }, 100);
};

elHeaderMenuOpen.addEventListener('click', handleOpenMenuHeader);

// ---- закриття модалки ---- //
const handleCloseMenuHeader = () => {
  elHeaderMenuWrap.style.transform = 'translateX(100%)';
  document.body.style.overflow = 'auto';
  setTimeout(() => {
    elHeaderMenuWrap.style.display = 'none';
  }, 700);
};

elHeaderMenuClose.addEventListener('click', handleCloseMenuHeader);

// орієнтир по сайту
const currentPageArray = document.location.href.split('/');
const currentPage = currentPageArray[currentPageArray.length - 1];
const openBasket = document.querySelector('#openBasket');

for (const element of elHeaderGuide) {
  if (element.getAttribute('href') === `./${currentPage}`) {
    element.style.color = '#6C5FBC';
  }
}

if (
  currentPage === 'index.html' ||
  currentPage === 'menu.html' ||
  currentPage === 'result-search.html'
) {
  openBasket.style.display = 'block';
}

//фіксований хедер
const elHeader = document.querySelector('.header');
const elHeaderBox = document.querySelector('.js-header-box');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    elHeader.classList.add('js-header');
    elHeaderBox.style.padding = '10px 0';
  } else {
    elHeader.classList.remove('js-header');
    elHeaderBox.style.padding = '40px 0';
  }
});

//* Double click for mobil off
document.addEventListener(
  'DOMContentLoaded',
  function () {
    var lastTouchEnd = 0;
    var delay = 500;

    document.addEventListener(
      'touchend',
      function (event) {
        var now = new Date().getTime();
        if (now - lastTouchEnd <= delay) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );
  },
  false
);
