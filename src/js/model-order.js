const backrop = document.querySelector('.backrop');
const closeBackrop = document.querySelector('#closeBackrop');
const openBackrop = document.querySelectorAll('#openBackrop');

const product = document.querySelector('#product');
const numberProduct = document.querySelector('#numberProduct');
const priceProduct = document.querySelector('#priceProduct');
const imgProduct = document.querySelector('#imgProduct');

const plusProduct = document.querySelector('#plusProduct');
const minusProduct = document.querySelector('#minusProduct');

const handleClickEvent = event => {
  let add = 1; //лічильник
  //знаходження елементів які потрібно буде добавити в модалку
  const photoProduct =
    event.currentTarget.parentElement.parentElement.firstElementChild
      .lastElementChild.src;
  const price = event.currentTarget.previousSibling.previousSibling; //+48539986208
  const nameProducts =
    event.currentTarget.parentNode.previousSibling.previousElementSibling.querySelector(
      '.dishes-wrap-title'
    );

  //присвоєння нових значень для елементів в модалці
  imgProduct.lastElementChild.src = photoProduct;
  product.textContent = nameProducts.textContent;
  numberProduct.textContent = 1;
  priceProduct.textContent = price.textContent;
  //відкриття модалки
  backrop.style.display = 'block';
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    backrop.style.opacity = '1';
  }, 50);

  // --- додавання кількості продуктів і загальна ціна --- //
  const addProduct = () => {
    if (add <= 0) add = 1;
    numberProduct.textContent = ++add;
    priceProduct.textContent =
      '$' + (parseFloat(price.textContent.replace('$', '')) * add).toFixed(2);
  };
  plusProduct.addEventListener('click', addProduct);

  // --- віднімання кількості продуктів і загальна ціна --- //
  const subtractProduct = () => {
    --add;
    if (add > 0) {
      numberProduct.textContent = add;
      priceProduct.textContent =
        '$' + (parseFloat(price.textContent.replace('$', '')) * add).toFixed(2);
    }
  };
  minusProduct.addEventListener('click', subtractProduct);

  // --- закриття модалки --- //
  const handleClick = () => {
    add = 1;
    backrop.style.opacity = '0';
    setTimeout(function () {
      backrop.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 500);
  };
  closeBackrop.addEventListener('click', handleClick);

  // --- закриття модалки поза межами модалки ---//
  window.onclick = event => {
    if (event.target == backrop) handleClick();
  };
};
for (const element of openBackrop) {
  element.addEventListener('click', handleClickEvent);
}

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

// --- пуш вибраного продукта в кошик --- //
const plusNewArr = []; //* масиви з кнопками
const minusNewArr = [];
const openDelete = [];
const array = [];
const clonePush = () => {
  const modelOrderClone = modelOrder.cloneNode(true);
  basket.appendChild(modelOrderClone);
  modelOrderClone.querySelector('.model-delete').style.display = 'block';
  backrop.style.opacity = '0';
  minusNewArr.splice(0);
  plusNewArr.splice(0);
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
  plusNewArr.push(basket.querySelectorAll('#plusProduct'));
  minusNewArr.push(basket.querySelectorAll('#minusProduct'));
  openDelete.push(basket.querySelectorAll('#buttonOpenDelete'));
  quantity.textContent = basket.children.length; //* показник кількості в кошику
};
btnPushOnBasket.addEventListener('click', clonePush);

// ---- додаємо кількість продуктів ---//
const addProduct = event => {
  const numberProduct =
    event.currentTarget.parentElement.previousElementSibling.firstElementChild
      .lastElementChild;
  const priceProduct =
    event.currentTarget.parentElement.previousElementSibling.lastElementChild
      .lastElementChild;
  if (numberProduct.textContent > 0) {
    const number = (numberProduct.textContent = ++numberProduct.textContent);
    console.log(number);
    const price = parseFloat(priceProduct.textContent.replace('$', ''));
    if (number !== 1) {
      priceProduct.textContent =
        '$' + ((price / (number - 1)) * number).toFixed(2);
    } else priceProduct.textContent = '$' + price / number;
  }
  totalPriceCalculator();
};

// --- віднімаємо кількість продуктів --- //
const subtractProduct = event => {
  const numberProduct =
    event.currentTarget.parentElement.previousElementSibling.firstElementChild
      .lastElementChild;
  const priceProduct =
    event.currentTarget.parentElement.previousElementSibling.lastElementChild
      .lastElementChild;
  if (numberProduct.textContent > 1) {
    const number = (numberProduct.textContent = --numberProduct.textContent);
    const price = parseFloat(priceProduct.textContent.replace('$', ''));
    priceProduct.textContent =
      '$' + ((price / (number + 1)) * number).toFixed(2);
  }
  totalPriceCalculator();
};

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
    console.log(index);
    //* перезапис історії збереженнь в кошику
    const arrayFromStorage = JSON.parse(localStorage.getItem('bascketChild'));
    arrayFromStorage.splice(index, 1);
    localStorage.setItem('bascketChild', JSON.stringify(arrayFromStorage));
    console.log(arrayFromStorage);
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
  if (plusNewArr.length > 0) {
    for (const element of plusNewArr[0]) {
      element.addEventListener('click', addProduct);
    }
    for (const element of minusNewArr[0]) {
      element.addEventListener('click', subtractProduct);
    }
    for (const element of openDelete[0]) {
      element.addEventListener('click', openModelDelete);
    }
  }
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
  for (let i = 0; i < arrayFromStorage.length; i++) {
    const element = arrayFromStorage[i];
    basket.insertAdjacentHTML('afterbegin', element);
  }
  plusNewArr.push(basket.querySelectorAll('#plusProduct'));
  minusNewArr.push(basket.querySelectorAll('#minusProduct'));
  openDelete.push(basket.querySelectorAll('#buttonOpenDelete'));
  quantity.textContent = basket.children.length; //* показник кількості в кошику
};
receivingBasket();

//! --- збереження сердечка --- //

const dishesListHeartLink = document.querySelectorAll(
  '.dishes-list-heart-link'
);

const savingTheHeartArray = [];
console.log(savingTheHeartArray);
const savingTheHeart = event => {
  const heartIcon = event.currentTarget.querySelector('.dishes-list-icon');
  if (heartIcon.style.fill === 'rgb(255, 255, 255)') {
    heartIcon.style.fill = '#6c5fbc';
    console.log(heartIcon.id);
    savingTheHeartArray.push(heartIcon.id);
    localStorage.setItem('heartIcon', JSON.stringify(savingTheHeartArray)); // даємо в сховище
    console.log(savingTheHeartArray);
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
