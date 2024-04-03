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

  // додавання кількості продуктів і загальна ціна
  const addProduct = () => {
    if (add <= 0) add = 1;
    numberProduct.textContent = ++add;
    priceProduct.textContent =
      '$' + (parseFloat(price.textContent.replace('$', '')) * add).toFixed(2);
  };
  plusProduct.addEventListener('click', addProduct);

  // віднімання кількості продуктів і загальна ціна
  const subtractProduct = () => {
    --add;
    if (add > 0) {
      numberProduct.textContent = add;
      priceProduct.textContent =
        '$' + (parseFloat(price.textContent.replace('$', '')) * add).toFixed(2);
    }
  };
  minusProduct.addEventListener('click', subtractProduct);

  //закриття модалки
  const handleClick = () => {
    add = 1;
    backrop.style.opacity = '0';
    setTimeout(function () {
      backrop.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 500);
  };
  closeBackrop.addEventListener('click', handleClick);

  //закриття модалки поза межами модалки
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

//пуш вибраного продукта в кошик
const plusNewArr = []; //* масиви з кнопками
const minusNewArr = [];
const clonePush = () => {
  const modelOrderClone = modelOrder.cloneNode(true);
  basket.appendChild(modelOrderClone);
  backrop.style.opacity = '0';
  minusNewArr.splice(0);
  plusNewArr.splice(0);
  setTimeout(function () {
    backrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);
  plusNewArr.push(basket.querySelectorAll('#plusProduct'));
  minusNewArr.push(basket.querySelectorAll('#minusProduct'));
};
btnPushOnBasket.addEventListener('click', clonePush);
console.log(minusNewArr);
//відкриття модалки
const clickOpenBasket = event => {
  basketModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    basketModal.style.opacity = '1';
  }, 50);
  //* ---- додаємо кількість продуктів ---//
  let add = 0;
  const addProduct = event => {
    const numberProduct =
      event.currentTarget.parentElement.previousElementSibling.firstElementChild
        .lastElementChild;
    const priceProduct =
      event.currentTarget.parentElement.previousElementSibling.lastElementChild
        .lastElementChild;
    if (add >= numberProduct.textContent) {
      numberProduct.textContent = ++add;
      const price =
        (priceProduct.textContent.replace('$', '') / (add - 1)) * add;
      priceProduct.textContent = '$' + parseFloat(price.toFixed(2)); //* Змінюємо вартість покупки
    } else add = parseInt(numberProduct.textContent);
    console.log(add);
  };
  //* перебираємо масив з кнопками
  if (plusNewArr.length > 0) {
    for (const element of plusNewArr[0]) {
      element.addEventListener('click', addProduct);
      console.log(element);
    }
  }
  const subtractProduct = event => {
    const numberProduct =
      event.currentTarget.parentElement.previousElementSibling.firstElementChild
        .lastElementChild;
    console.log(numberProduct);
    const priceProduct =
      event.currentTarget.parentElement.previousElementSibling.lastElementChild
        .lastElementChild;
    console.log(priceProduct);
  };
  if (minusNewArr.length > 0) {
    for (const element of minusNewArr[0]) {
      element.addEventListener('click', subtractProduct);
    }
  }
};
openBasket.addEventListener('click', clickOpenBasket);

//закриття модалки
const clickCloseBasket = () => {
  basketModal.style.opacity = '0';
  setTimeout(function () {
    basketModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);
};
window.onclick = event => {
  if (event.target === basketModal) clickCloseBasket();
};
closeBasket.addEventListener('click', clickCloseBasket);
