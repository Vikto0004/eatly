const elHeaderMenuClose = document.querySelector('.js-header-menu-close');
const elHeaderMenuOpen = document.querySelector('.js-header-menu-open');
const elHeaderMenuWrap = document.querySelector('.js-header-menu-wrap');
const elHeaderGuide = document.querySelectorAll('.js-header-guide');
const elUserExitBtns = document.querySelectorAll('.js-header-user-exit');

let isOpenUserOpt = false;
let elUserOptCont;

window.addEventListener('click', () => {
  if (!isOpenUserOpt) return;
  elUserOptCont.style.height = '0';
  setTimeout(() => (elUserOptCont.style.display = 'none'), 300);
  isOpenUserOpt = false;
});

function hideLoginAndShowUser(userName) {
  const elListLogin = document.querySelectorAll('.js-list-login');
  const elUserWrap = document.querySelectorAll('.js-header-user-wrap');
  const elUserText = document.querySelectorAll('.js-header-user-text');

  elListLogin.forEach(el => el.classList.add('list-login-act'));
  elUserWrap.forEach(el => el.classList.add('header-user-active'));
  elUserText.forEach(el => (el.textContent = userName));

  elUserWrap.forEach(el => {
    el.addEventListener('click', e => {
      if (isOpenUserOpt) return;
      const elCurrent = e.currentTarget;
      elUserOptCont = elCurrent.querySelector('.js-header-user-opt-cont');

      elUserOptCont.style.display = 'block';
      setTimeout(() => (elUserOptCont.style.height = '130px'));
      setTimeout(() => (isOpenUserOpt = true), 100);
    });
  });
}
const userData = JSON.parse(localStorage.getItem('userData'));
userData && hideLoginAndShowUser(userData.name);

elUserExitBtns.forEach(el => {
  el.addEventListener('click', () => {
    window.location.href = './';
    localStorage.removeItem('userData');
  });
});

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
  currentPage === 'result-search.html' ||
  currentPage === ''
) {
  openBasket.style.display = 'block';
}

//фіксований хедер
const elHeader = document.querySelector('.header');
const elHeaderBox = document.querySelector('.js-header-box');

function updateHeaderOnScroll() {
  if (window.scrollY > 40) {
    elHeader.classList.add('js-header');
    elHeaderBox.style.padding = '10px 0';
  } else {
    elHeader.classList.remove('js-header');
    elHeaderBox.style.padding = '40px 0';
  }
}

updateHeaderOnScroll();
window.addEventListener('scroll', updateHeaderOnScroll);

export function handleScroll(action) {
  if (action === 'hide') {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    elHeader.style.paddingRight = `${scrollbarWidth}px`;
  } else if (action === 'show') {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
    elHeader.style.paddingRight = '';
  }
}

//* Double click for mobil off
document.body.addEventListener('dblclick', event => event.preventDefault());
