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

    obj.elementReference = element.outerHTML;
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

const elRadioSortGroup = document.getElementsByName('sort-group');
const elRadioSort = document.getElementsByName('sort');

let idRadioSortGroup = 'pizza';
let idRadioSort = 'recomended';

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

// --- вибір ціни --- //

const elPriceSliderInput = document.querySelector('.price-slider-input');
const elPriceSliderOutput = document.querySelector('.price-slider-output');

let price = 0;

const outputUpdate = event => {
  elPriceSliderOutput.textContent = event.target.value;
  if (parseFloat(event.target.value) > 50) {
    price = parseFloat(event.target.value);
    elPriceSliderOutput.style.left =
      2.088 * (-15 + parseFloat(event.target.value)) + 'px';
  } else {
    elPriceSliderOutput.style.left =
      2.088 * (-10 + parseFloat(event.target.value)) + 'px';
    price = parseFloat(event.target.value);
  }
};

elPriceSliderInput.addEventListener('input', outputUpdate);

// ----- вибрати, пошук ---- //

const elApllyBtn = document.querySelector('.search-aplly-btn');

class ToSort {
  constructor(arrayProducts) {
    this.arrayProducts = arrayProducts;
  }

  getResultSearch() {
    const result = [];
    for (const object of this.arrayProducts) {
      result.push(object.elementReference);
    }

    localStorage.setItem('numberResultSearch', `${result.length}`);
    localStorage.setItem('resultSearch', result.join('')); //збереження результату пошуку

    window.location.href = './result-search.html';
  }

  popularSort() {
    this.arrayProducts.sort((a, b) => {
      if (a.popular) {
        return -1;
      } else {
        return 1;
      }
    });
    this.getResultSearch();
  }

  recomendedSort() {
    this.arrayProducts.sort(a => {
      if (a.recomended) {
        return -1;
      } else {
        return 1;
      }
    });
    this.getResultSearch();
  }

  lowestPriceSort() {
    this.arrayProducts.sort((a, b) => {
      return a.price - b.price;
    });
    this.getResultSearch();
  }

  highestPriceSort() {
    this.arrayProducts.sort((a, b) => {
      return b.price - a.price;
    });
    this.getResultSearch();
  }
}

const applyFn = () => {
  if (price === 0) {
    elPriceSliderOutput.style.color = '#F7433D';
    elPriceSliderOutput.style.textShadow = '0 0 5px #F8564F';

    setTimeout(function () {
      elPriceSliderOutput.style.color = '#fff';
      elPriceSliderOutput.style.textShadow = '';
    }, 2000);
  } else {
    const resultSearchPrice = prodoctsInfoAll[idRadioSortGroup]
      .map(element => {
        return element.price <= price ? element : undefined;
      })
      .filter(element => element !== undefined);

    const toSort = new ToSort(resultSearchPrice);

    if (idRadioSort === 'popular') {
      toSort.popularSort();
    } else if (idRadioSort === 'recomended') {
      toSort.recomendedSort();
    } else if (idRadioSort === 'lowest-price') {
      toSort.lowestPriceSort();
    } else if (idRadioSort === 'highest-price') {
      toSort.highestPriceSort();
    }
  }
};

elApllyBtn.addEventListener('click', applyFn);
