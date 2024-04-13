const elResultSsearchSection = document.querySelector('.js-result-search');
const elResultSearchList = document.querySelector('.js-result-search-list');
const elResultSearchTitlte = document.querySelector('.js-result-search-titlte');
const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

svgIcon.setAttribute('width', '24');
svgIcon.setAttribute('height', '24');

const useElement = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'use'
);

elResultSearchTitlte.textContent;

const numberProducts = localStorage.getItem('numberResultSearch');

if (parseFloat(numberProducts) > 0) {
  useElement.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'href',
    'img/sprite.svg#icon-cool'
  );
  svgIcon.appendChild(useElement);

  elResultSearchTitlte.textContent = `${numberProducts} products were found`;
  elResultSearchTitlte.appendChild(svgIcon);
} else {
  useElement.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'href',
    'img/sprite.svg#icon-confused'
  );
  svgIcon.appendChild(useElement);

  elResultSearchTitlte.textContent = 'Nothing found';
  elResultSearchTitlte.appendChild(svgIcon);
}

elResultSearchList.insertAdjacentHTML(
  'beforeend',
  localStorage.getItem('resultSearch')
);
