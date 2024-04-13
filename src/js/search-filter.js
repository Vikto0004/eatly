// --- вся інформація про продукти --- //
const prodoctsInfoAll = {
  dishes: [],
  pizza: [],
  donat: [],
};

const elDishes = document.querySelector('.js-dishes');
const elPizza = document.querySelector('.js-pizza');
const elDonat = document.querySelector('.js-donat');

const dishesGroupColention = elDishes.nextElementSibling.children;
const pizzaGroupColention = elPizza.nextElementSibling.children;
const donatGroupColention = elDonat.nextElementSibling.children;

const addToGroup = (groupColention, group) => {
  for (const element of groupColention) {
    const elName = element.querySelector('.dishes-wrap-title').textContent;
    const elPrice = parseFloat(
      element
        .querySelector('.dishes-container-text')
        .textContent.replace('$', '')
    );

    const obj = {};

    obj.elementReference = element;
    obj.name = elName;
    obj.price = elPrice;

    if (element.querySelector('.dishes-wrap-text').textContent === 'Healthy') {
      obj.popular = false;
      obj.recomended = true;
    } else if (
      element.querySelector('.dishes-wrap-text').textContent === 'Trending'
    ) {
      obj.popular = true;
      obj.recomended = false;
    } else {
      obj.popular = false;
      obj.recomended = false;
    }

    prodoctsInfoAll[group].push(obj);
  }
};

addToGroup(dishesGroupColention, 'dishes');
addToGroup(pizzaGroupColention, 'pizza');
addToGroup(donatGroupColention, 'donat');

// ----- search ---- //
const elResultSsearchSection = document.querySelector('.js-result-search');
const elRadioSortGroup = document.getElementsByName('sort-group');
const elRadioSort = document.getElementsByName('sort');

let idRadioSortGroup;
let idRadioSort;

for (const element of elRadioSortGroup) {
  element.addEventListener('input', event => {
    idRadioSortGroup = event.target.id;
  });
}

for (const element of elRadioSort) {
  element.addEventListener('input', event => {
    idRadioSort = event.target.id;
  });
}

const elSearchPriceLiner = document.querySelector('.search-price-liner');
const elSearchPriceCircle = document.querySelector('.search-price-circle');
console.log(elSearchPriceCircle);
elSearchPriceCircle.addEventListener('click', () => {
  elSearchPriceLiner.addEventListener('mousemove', event => {
    console.log(event.offsetX);
    elSearchPriceCircle.style.left = `${event.offsetX}px`;
  });
});
