const elResultSsearchSection = document.querySelector('.js-result-search');
const elResultSearchList = document.querySelector('.js-result-search-list');
const elResultSearchTitlte = document.querySelector('.js-result-search-titlte');
const numberProducts = localStorage.getItem('numberResultSearch');

// -- створення смайлика svg, текст і додавання в потрібний елемент -- //

const spanEl = document.createElement('span');
spanEl.textContent = 'found';

function createSvgToEl(element, icon, text) {
  const elIcon = `<svg width="24px" height="24px"><use href="./img/sprite.svg#icon-${icon}"></use></svg>`;

  element.textContent = text;
  element.appendChild(spanEl);
  element.insertAdjacentHTML('beforeend', elIcon);
}

if (parseFloat(numberProducts) > 0) {
  createSvgToEl(
    elResultSearchTitlte,
    'cool',
    `${numberProducts} products were`
  );
} else {
  createSvgToEl(elResultSearchTitlte, 'confused', `Nothing`);
}

// ---- додаємо всі знайдені продуки на сторінку ---- //

elResultSearchList.insertAdjacentHTML(
  'beforeend',
  localStorage.getItem('resultSearch')
);
