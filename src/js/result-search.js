const elResultSsearchSection = document.querySelector('.js-result-search');
const elResultSearchList = document.querySelector('.js-result-search-list');
const elResultSearchTitlte = document.querySelector('.js-result-search-titlte');
const numberProducts = localStorage.getItem('numberResultSearch');

// -- створення смайлика svg, текст і додавання в потрібний елемент -- //

const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgIcon.setAttribute('width', '24');
svgIcon.setAttribute('height', '24');

const useElement = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'use'
);

function createSvgToEl(element, icon, text) {
  useElement.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'href',
    `./img/sprite.svg#icon-${icon}`
  );
  svgIcon.appendChild(useElement);

  element.textContent = text;
  element.appendChild(svgIcon);
}

if (parseFloat(numberProducts) > 0) {
  createSvgToEl(
    elResultSearchTitlte,
    'cool',
    `${numberProducts} products were found`
  );
} else {
  createSvgToEl(elResultSearchTitlte, 'confused', `Nothing found`);
}

// ---- додаємо всі знайдені продуки на сторінку ---- //

elResultSearchList.insertAdjacentHTML(
  'beforeend',
  localStorage.getItem('resultSearch')
);
