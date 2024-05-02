const elResultSsearchSection = document.querySelector('.js-result-search');
const elResultSearchList = document.querySelector('.js-result-search-list');
const elResultSearchTitlte = document.querySelector('.js-result-search-titlte');
const elResIconCool = document.querySelector('.result-search-icon-cool');
const elResIconConfus = document.querySelector('.result-search-icon-confused');

const numberProducts = localStorage.getItem('numberResultSearch');

// -- створення смайлика svg, текст і додавання в потрібний елемент -- //

const spanEl = document.createElement('span');
spanEl.textContent = 'found';

if (parseFloat(numberProducts) > 0) {
  elResultSearchTitlte.textContent = `${numberProducts} products were`;
  elResultSearchTitlte.appendChild(spanEl);
  elResIconCool.classList.add('result-search-icon-open');
} else {
  elResultSearchTitlte.textContent = `Nothing`;
  elResultSearchTitlte.appendChild(spanEl);
  elResIconConfus.classList.add('result-search-icon-open');
}

// ---- додаємо всі знайдені продуки на сторінку ---- //

elResultSearchList.insertAdjacentHTML(
  'beforeend',
  localStorage.getItem('resultSearch')
);
