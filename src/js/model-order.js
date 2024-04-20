const backrop = document.querySelector('.backrop');
const closeBackrop = document.querySelector('#closeBackrop');
const openBackrop = document.querySelectorAll('#openBackrop');
const elDishesList = document.querySelector('.js-dishes-list');

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

// ---------- Oprations on products of modal ------------- //
const operationsOnProducts = event => {
  const elName = event.target.nodeName;
  if (!(elName === 'BUTTON' || elName === 'svg' || elName === 'use')) return;

  const elItem = event.target.closest('.dishes-list-item');
  const photoProd = elItem.querySelector('.dishes-list-img').src;
  const costProd = elItem.querySelector('.dishes-container-text').textContent;
  const nameProd = elItem.querySelector('.dishes-wrap-title').textContent;

  elImgProdMod.src = photoProd;
  elPriceProdMod.textContent = costProd;
  elNameProdMod.textContent = nameProd;

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

  //* Closing the modal
  const closingTheModal = () => {
    backrop.style.opacity = '0';
    setTimeout(function () {
      backrop.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 500);
  };
  closeBackrop.addEventListener('click', closingTheModal);

  //* closing the modal outside of it
  window.onclick = event => {
    if (event.target == backrop) closingTheModal();
  };
};

elDishesList.addEventListener('click', operationsOnProducts);

//!-----------------------Модалка для кошика-----------------------//

const basketModal = document.querySelector('.basket-modal');
const openBasket = document.querySelector('#openBasket');
const closeBasket = document.querySelector('#closeBasket');
const basket = document.querySelector('.basket-container');
const btnPushOnBasket = document.querySelector('.target-btn');
const modelOrder = document.querySelector('.model-order-container');
const quantity = document.querySelector('#quantity');
const totalPrice = document.querySelector('.basket-wrap-price');
const emptyBasket = document.querySelector('.empty-basket');

const elBasket = document.querySelector('.basket-container');

// --- пуш вибраного продукта в кошик --- //
const openDelete = [];
const array = [];
const clonePush = () => {
  const modelOrderClone = modelOrder.cloneNode(true);
  basket.appendChild(modelOrderClone);
  modelOrderClone.querySelector('.model-delete').style.display = 'block';
  backrop.style.opacity = '0';
  openDelete.splice(0);
  setTimeout(function () {
    backrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);

  if (array.length > 0) array.push(modelOrderClone.outerHTML);
  else {
    for (const iterator of basket.children) {
      array.push(iterator.outerHTML);
    }
  }

  localStorage.setItem('bascketChild', JSON.stringify(array)); //* зберігаємо клони пушів в браузері
  openDelete.push(basket.querySelectorAll('#buttonOpenDelete'));
  quantity.textContent = basket.children.length; //* показник кількості в кошику
};
btnPushOnBasket.addEventListener('click', clonePush);

// ------------- Operations on basket ------------ //
const operationsOnProdBask = event => {
  const elTarget = event.target;
  const elName = elTarget.nodeName;
  if (!(elName === 'BUTTON' || elName === 'svg' || elName === 'use')) return;

  const elItem = elTarget.closest('.model-order-container');
  const elNumberProd = elItem.querySelector('#numberProduct');
  const elPriceProd = elItem.querySelector('#priceProduct');

  let numberProd = parseFloat(elNumberProd.textContent);
  let priceProd = parseFloat(elPriceProd.textContent.replace('$', ''));

  if (elTarget.closest('#plusProduct')) {
    const addingProd = () => {
      elNumberProd.textContent = ++numberProd;
      elPriceProd.textContent =
        '$' + ((priceProd / (numberProd - 1)) * numberProd).toFixed(2);
    };
    addingProd();
    totalPriceCalculator();
  } else if (elTarget.closest('#minusProduct')) {
    const subtractProd = () => {
      if (numberProd === 1) return;
      elNumberProd.textContent = --numberProd;
      elPriceProd.textContent =
        '$' + ((priceProd / (numberProd + 1)) * numberProd).toFixed(2);
    };
    subtractProd();
    totalPriceCalculator();
  }
};
elBasket.addEventListener('click', operationsOnProdBask);

// --- Відкриваємо модалку для видалення продуктів, видаляємо і закриваємо --- //
const openModelDelete = event => {
  event.currentTarget.nextElementSibling.style.display = 'block';
  const modelOrderContainer = event.currentTarget.parentNode.parentNode;
  const buttonDelete = event.currentTarget.nextElementSibling.firstElementChild;

  const arrayBesket = basket.children;
  const reversedObject = Object.fromEntries(
    Object.entries(arrayBesket).reverse()
  );

  //* отримання індексу елемента/продукта якого ми видаляємо
  const searchValue = event.currentTarget.parentNode.parentNode;
  const keys = Object.keys(reversedObject);

  buttonDelete.addEventListener('click', () => {
    modelOrderContainer.remove();
    totalPriceCalculator();
    emptyBasketNone();

    const foundKey = keys.find(key => reversedObject[key] === searchValue);
    const index = parseFloat(foundKey);
    //* перезапис історії збереженнь в кошику
    const arrayFromStorage = JSON.parse(localStorage.getItem('bascketChild'));
    arrayFromStorage.splice(index, 1);
    localStorage.setItem('bascketChild', JSON.stringify(arrayFromStorage));
  });
  const closeDelete = event.currentTarget.firstElementChild;
  const closeDeleteBtn = event.currentTarget;
  const deleteWrap = event.currentTarget.nextElementSibling;
  window.onclick = event => {
    if (event.target !== closeDelete && event.target !== closeDeleteBtn) {
      deleteWrap.style.display = 'none';
    }
  };
};

// --- відкриття модалки --- //
const clickOpenBasket = event => {
  basketModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    basketModal.style.opacity = '1';
  }, 50);
  // if (plusNewArr.length > 0) {
  //   for (const element of openDelete[0]) {
  //     element.addEventListener('click', openModelDelete);
  //   }
  // }
  totalPriceCalculator();
  emptyBasketNone();
};
openBasket.addEventListener('click', clickOpenBasket);

// --- закриття модалки --- //
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

const receivingBasket = () => {
  const arrayFromStorage = JSON.parse(localStorage.getItem('bascketChild'));
  if (arrayFromStorage.length === 0) return;
  for (let i = 0; i < arrayFromStorage.length; i++) {
    const element = arrayFromStorage[i];
    basket.insertAdjacentHTML('afterbegin', element);
  }
  openDelete.push(basket.querySelectorAll('#buttonOpenDelete'));
  quantity.textContent = basket.children.length; //* показник кількості в кошику
};
receivingBasket();

//! --- збереження сердечка --- //

const dishesListHeartLink = document.querySelectorAll(
  '.dishes-list-heart-link'
);

const savingTheHeartArray = [];
const savingTheHeart = event => {
  const heartIcon = event.currentTarget.querySelector('.dishes-list-icon');
  if (heartIcon.style.fill === 'rgb(255, 255, 255)') {
    heartIcon.style.fill = '#6c5fbc';
    savingTheHeartArray.push(heartIcon.id);
    localStorage.setItem('heartIcon', JSON.stringify(savingTheHeartArray)); // даємо в сховище
  } else {
    heartIcon.style.fill = 'rgb(255, 255, 255)';
    for (const element of savingTheHeartArray) {
      if (element === heartIcon.id) {
        savingTheHeartArray.splice(savingTheHeartArray.indexOf(element), 1);
      }
    }
    localStorage.setItem('heartIcon', JSON.stringify(savingTheHeartArray)); // стираємо з сховища
  }
};

for (const element of dishesListHeartLink) {
  element.addEventListener('click', savingTheHeart);
}

const receivingTheHeart = () => {
  const arrayFromStorage = JSON.parse(localStorage.getItem('heartIcon'));
  if (arrayFromStorage.length === 0) return;
  for (const element of arrayFromStorage) {
    savingTheHeartArray.push(element);
    const heartIcon = document.querySelector(`#${element}`);
    if (heartIcon) {
      heartIcon.style.fill = '#6c5fbc';
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
