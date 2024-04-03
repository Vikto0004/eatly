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
  const price = event.currentTarget.previousSibling.previousSibling;
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

// --- пуш вибраного продукта в кошик --- //
const plusNewArr = []; //* масиви з кнопками
const minusNewArr = [];
const openDelete = [];
const clonePush = () => {
  const modelOrderClone = modelOrder.cloneNode(true);
  basket.appendChild(modelOrderClone);
  modelOrderClone.querySelector('.model-delete').style.display = 'block';
  modelOrderClone.classList.add('swiper-slide');
  modelOrderClone.style.height = '180px';
  backrop.style.opacity = '0';
  minusNewArr.splice(0);
  plusNewArr.splice(0);
  openDelete.splice(0);
  setTimeout(function () {
    backrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);
  plusNewArr.push(basket.querySelectorAll('#plusProduct'));
  minusNewArr.push(basket.querySelectorAll('#minusProduct'));
  openDelete.push(basket.querySelectorAll('#buttonOpenDelete'));
  quantity.textContent = basket.children.length; //* показник кількості в кошику
};
btnPushOnBasket.addEventListener('click', clonePush);
console.log(openDelete);

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
  buttonDelete.addEventListener('click', () => {
    modelOrderContainer.remove();
    totalPriceCalculator();
  });
  const closeDelete = event.currentTarget.firstElementChild;
  const deleteWrap = event.currentTarget.nextElementSibling;
  window.onclick = event => {
    if (event.target !== closeDelete) {
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

// --- слайдер --- //
const swiper2 = new Swiper('.mySwiper2', {
  direction: 'vertical',
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
