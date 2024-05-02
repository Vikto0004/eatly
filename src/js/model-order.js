const backrop = document.querySelector('.backrop');
const closeBackrop = document.querySelector('#closeBackrop');
const openBackrop = document.querySelectorAll('#openBackrop');
const elDishesList = document.querySelector('.js-dishes-list');
const elOrderForm = document.querySelector('.order-form');

const priceProduct = document.querySelector('#priceProduct');
const product = document.querySelector('#product');
const numberProduct = document.querySelector('#numberProduct');
const plusProduct = document.querySelector('#plusProduct');
const minusProduct = document.querySelector('#minusProduct');

const elImgProdMod = document.querySelector('#imgProduct img');
const elPriceProdMod = document.querySelector('#priceProduct');
const elNameProdMod = document.querySelector('#product');
const elNumberProdMod = document.querySelector('#numberProduct');
const elPlusProdMod = document.querySelector('#plusProduct');
const elMinusProdMod = document.querySelector('#minusProduct');
const elWrapProdMod = document.querySelector('.model-order-container');
const elBtnPushOnBask = document.querySelector('.target-btn');
const elBtnOrderMod = document.querySelector('.button-order');
const elPriceForOneProd = document.querySelector('#priceForOneProd');

const basketModal = document.querySelector('.basket-modal');
const openBasket = document.querySelector('#openBasket');
const closeBasket = document.querySelector('#closeBasket');
const basket = document.querySelector('.basket-container');
const quantity = document.querySelector('#quantity');
const totalPrice = document.querySelector('.basket-wrap-price');
const emptyBasket = document.querySelector('.empty-basket');
const elBasket = document.querySelector('.basket-container');
const elBtnBaskOrder = document.querySelector('.basket-wrap-btn');

// --------------------------- Oprations on products of modal --------------------------- //
const savingTheHeartArr = [];

const operationsOnProducts = event => {
  //* Giving of current elements
  const elTarget = event.target;
  const elItem = event.target.closest('.dishes-list-item');
  if (!elItem) return;
  const elHeardIcon = elItem.querySelector('.dishes-list-icon');

  //* Seving heard
  if (elHeardIcon === elTarget || elTarget.closest('.dishes-list-heart-link')) {
    if (elHeardIcon.style.fill === 'rgb(255, 255, 255)') {
      elHeardIcon.style.fill = 'rgb(108, 95, 188)';
      savingTheHeartArr.push(elHeardIcon.id);
      localStorage.setItem('elHeardIcon', JSON.stringify(savingTheHeartArr));
    } else {
      elHeardIcon.style.fill = 'rgb(255, 255, 255)';
      for (const element of savingTheHeartArr) {
        if (element === elHeardIcon.id) {
          savingTheHeartArr.splice(savingTheHeartArr.indexOf(element), 1);
        }
      }
      localStorage.setItem('elHeardIcon', JSON.stringify(savingTheHeartArr));
    }
  }

  if (!elTarget.closest('.dishes-container-btn')) return;

  //* Giving of current values element
  const photoProd = elItem.querySelector('.dishes-list-img').src;
  const costProd = elItem.querySelector('.dishes-container-text').textContent;
  const nameProd = elItem.querySelector('.dishes-wrap-title').textContent;

  elImgProdMod.src = photoProd;
  elPriceProdMod.textContent = costProd;
  elPriceForOneProd.textContent = costProd;
  elNameProdMod.textContent = nameProd;
  elNumberProdMod.textContent = 1;

  let numberProdMod = parseFloat(elNumberProdMod.textContent);
  let priceProdMod = parseFloat(costProd.replace('$', ''));

  //* Adding products
  elPlusProdMod.addEventListener('click', () => {
    elNumberProdMod.textContent = ++numberProdMod;
    elPriceProdMod.textContent =
      '$' + (priceProdMod * numberProdMod).toFixed(2);
  });

  //* Subtraction products
  elMinusProdMod.addEventListener('click', () => {
    if (numberProdMod === 1) return;
    elNumberProdMod.textContent = --numberProdMod;
    elPriceProdMod.textContent =
      '$' + (priceProdMod * numberProdMod).toFixed(2);
  });

  //* Open mobal
  backrop.style.display = 'block';
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    backrop.style.opacity = '1';
  }, 50);

  closeBackrop.addEventListener('click', closingTheModal);

  //* Closing the modal outside of it
  window.onclick = event => {
    if (event.target == backrop) closingTheModal();
  };
};

elDishesList.addEventListener('click', operationsOnProducts);

//* Closing the modal
function closingTheModal() {
  backrop.style.opacity = '0';
  setTimeout(function () {
    backrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);
}

// --------------------------- Push product on basket --------------------------- //
let saveProdArr = [];
let counterId = 0;

if (saveProdArr.length === 0 && localStorage.getItem('saveProdBask')) {
  saveProdArr = [...JSON.parse(localStorage.getItem('saveProdBask'))];
  counterId = JSON.parse(localStorage.getItem('counterId'));
  quantity.textContent = saveProdArr.length;
} else {
  counterId = 0;
  localStorage.setItem('counterId', counterId);
}

//* Adding products on localStore
const addOnLocalStore = () => {
  saveProdArr.push(
    `<div class="model-order-container" id="numProdBask${++counterId}">${
      elWrapProdMod.innerHTML
    }</div>`
  );
  localStorage.setItem('saveProdBask', JSON.stringify(saveProdArr));
  localStorage.setItem('counterId', JSON.stringify(counterId));
  quantity.textContent = saveProdArr.length;
  closingTheModal();
};

elBtnPushOnBask.addEventListener('click', addOnLocalStore);

//* Save change in basket and transition on order page
elBtnBaskOrder.addEventListener('click', () => {
  saveProdArr = [...elBasket.children];
  const newSaveArr = saveProdArr.reduce((acc, el) => {
    acc.push(
      `<div class="model-order-container" id="numProdBask${++counterId}">${
        el.innerHTML
      }</div>`
    );
    return acc;
  }, []);

  localStorage.setItem('saveProdBask', JSON.stringify(newSaveArr));
  window.location.href = 'menu-map.html';
});

//* Seving info user for order
elOrderForm.addEventListener('submit', event => {
  event.preventDefault();
  const objInfoUser = {
    nameUser: '',
    emailUser: '',
    addressUser: '',
  };

  objInfoUser.nameUser = elOrderForm.elements.nameUser.value.trim();
  objInfoUser.emailUser = elOrderForm.elements.mailUser.value.trim();
  objInfoUser.addressUser = elOrderForm.elements.addrUser.value.trim();

  localStorage.setItem('seveInfoUserForOrder', JSON.stringify(objInfoUser));
  addOnLocalStore();
  window.location.href = 'menu-map.html';
});

// --------------------------- Operations on basket ---------------------------- //

//* Close wrap delete
let elCloseWrapDel = '';
document.onclick = e => {
  if (e.target !== elCloseWrapDel && elCloseWrapDel) {
    elCloseWrapDel.style.display = 'none';
    elCloseWrapDel = '';
  }
};

const operationsOnProdBask = event => {
  const elTarget = event.target;
  const elName = elTarget.nodeName;

  if (!(elName === 'BUTTON' || elName === 'svg' || elName === 'use')) return;

  //* Giving of current elements
  const elItem = elTarget.closest('.model-order-container');
  const elNumberProd = elItem.querySelector('#numberProduct');
  const elPriceProd = elItem.querySelector('#priceProduct');

  let numberProd = parseFloat(elNumberProd.textContent);
  let priceProd = parseFloat(elPriceProd.textContent.replace('$', ''));

  //* Adding products
  if (elTarget.closest('#plusProduct')) {
    elNumberProd.textContent = ++numberProd;
    elPriceProd.textContent =
      '$' + ((priceProd / (numberProd - 1)) * numberProd).toFixed(2);
    totalPriceCalculator();
    return;
  }

  //* Subtraction products
  if (elTarget.closest('#minusProduct')) {
    if (numberProd === 1) return;
    elNumberProd.textContent = --numberProd;
    elPriceProd.textContent =
      '$' + ((priceProd / (numberProd + 1)) * numberProd).toFixed(2);
    totalPriceCalculator();
    return;
  }

  //* Delete prodoct on basket and localStorage
  if (elTarget.closest('.button-open-delete')) {
    elItem.querySelector('.delete-wrap').style.display = 'block';
    setTimeout(() => {
      elCloseWrapDel = elItem.querySelector('.delete-wrap');
    }, 100);
  } else if (elTarget.closest('.delete-wrap-btn')) {
    const newArr = saveProdArr.filter(element => {
      return !element.includes(`id="${elItem.id}"`);
    });

    saveProdArr = newArr;
    localStorage.setItem('saveProdBask', JSON.stringify(newArr));
    elItem.remove();
    totalPriceCalculator();
    emptyBasketNone();
  }
};
elBasket.addEventListener('click', operationsOnProdBask);

// ------------------------- Open modal window this basket ------------------------ //
const clickOpenBasket = event => {
  basketModal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  //* Update list products on basket
  basket.innerHTML = '';
  basket.insertAdjacentHTML('beforeend', saveProdArr.join(''));
  const elBtnDel = basket.querySelectorAll('.model-delete');
  elBtnDel.forEach(element => element.classList.add('model-delete-open'));

  setTimeout(() => (basketModal.style.opacity = '1'), 50);
  totalPriceCalculator();
  emptyBasketNone();
};
openBasket.addEventListener('click', clickOpenBasket);

// ------------------------ Close modal window this basket -------------------------- //
const clickCloseBasket = () => {
  basketModal.style.opacity = '0';
  setTimeout(function () {
    basketModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);
  quantity.textContent = basket.children.length;
};
window.onclick = event => {
  if (event.target === basketModal) clickCloseBasket();
};
closeBasket.addEventListener('click', clickCloseBasket);

// --- калькулятор загальної суми покупки --- //
const totalPriceCalculator = () => {
  const priceArray = basket.querySelectorAll('#priceProduct');
  let sum = 0;
  for (const element of priceArray) {
    sum += parseFloat(element.textContent.replace('$', ''));
  }
  totalPrice.textContent = '$' + sum.toFixed(2);
};

const emptyBasketNone = () => {
  if (basket.children.length > 0) {
    emptyBasket.style.display = 'none';
  } else emptyBasket.style.display = 'block';
};
emptyBasketNone();

const receivingTheHeart = () => {
  const arrayFromStorage = JSON.parse(localStorage.getItem('elHeardIcon'));
  if (!arrayFromStorage) return;
  for (const element of arrayFromStorage) {
    savingTheHeartArr.push(element);
    const heartIcon = document.querySelector(`#${element}`);
    if (heartIcon) {
      heartIcon.style.fill = 'rgb(108, 95, 188)';
    }
  }
};
receivingTheHeart();

// -- перефарбування Trending і Supreme
const dishesWrapText = document.querySelectorAll('.dishes-wrap-text');
for (const element of dishesWrapText) {
  if (element.textContent === 'Trending') {
    element.style.background = '#F7C5BA';
    element.style.color = '#FB471D';
  } else if (element.textContent === 'Supreme') {
    element.style.background = '#40e683';
    element.style.opacity = '0.5';
    element.style.color = '#198042';
  }
}
