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
const clonePush = () => {
  const modelOrderClone = modelOrder.cloneNode(true);
  basket.appendChild(modelOrderClone);
  backrop.style.opacity = '0';
  setTimeout(function () {
    backrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 500);
};
btnPushOnBasket.addEventListener('click', clonePush);

//відкриття модалки
const clickOpenBasket = () => {
  basketModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    basketModal.style.opacity = '1';
  }, 50);
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
