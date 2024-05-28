import { init } from './map';
google.maps.event.addDomListener(window, 'load', init);

const elMapForm = document.querySelector('.map-entry-form');
const elInputLoc = document.querySelector('.map-entry-input-location');
const elInputAddr = document.querySelector('.input-user-addr');
const elMap = document.querySelector('#map');
const elMapModelWrap = document.querySelector('.map-model-wrap');

const elMapPayContainer = document.querySelector('.map-payment-container');
const elMapProdwrap = document.querySelector('.map-products-wrap');
const elMapPaySubtotal = document.querySelector('.js-map-payment-subtotal');
const elMapPayDelivery = document.querySelector('.js-map-payment-delivery');
const elMapPayTotalPrice = document.querySelector('.js-map-payment-text-total');

const shopper = {};
let switchEnterInput = true;
let placeKeyword = '';

//* Receving info user whith localStorage
if (localStorage.getItem('seveInfoUserForOrder')) {
  const objInfoUser = JSON.parse(localStorage.getItem('seveInfoUserForOrder'));

  elMapForm.elements.userName.value = objInfoUser.nameUser;
  elMapForm.elements.userEmail.value = objInfoUser.emailUser;
  elMapForm.elements.userAddr.value = objInfoUser.addressUser;
}

const receivingInfoOrder = async event => {
  event.preventDefault();

  const inputValName = elMapForm.elements.userName.value.trim();
  const inputValMail = elMapForm.elements.userEmail.value.trim();
  const inputs = elMapForm.querySelectorAll('input');
  const elBtnForm = elMapForm.elements[4];

  placeKeyword = elInputAddr.value.trim();
  elInputAddr.addEventListener('focus', () => (elInputLoc.checked = false));

  shopper.name = inputValName;
  shopper.email = inputValMail;
  shopper.address = elInputAddr.value.trim();

  if (switchEnterInput) {
    inputs.forEach(input => {
      input.setAttribute('readonly', true);
    });
    elInputLoc.disabled = true;
    switchEnterInput = false;
    elBtnForm.textContent = 'Change';

    elMap.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });

    elMapModelWrap.classList.add('map-model-wrap-open');

    const deliveryTime = await init(event, placeKeyword)
      .then(response => response.routes[0].legs[0].duration.text.split(' '))
      .catch(error => {
        elMapModelWrap.innerHTML = `<p class="map-model-text">We did not find this place :(</p>`;
        deliveryCalculator(false);
      });

    if (deliveryTime && deliveryTime[2]) {
      elMapModelWrap.innerHTML = '';
      const elNewChild = `<p class="map-model-text">We do not deliver products when delivery is longer than an hour :(</p>`;
      elMapModelWrap.insertAdjacentHTML('beforeend', elNewChild);
      deliveryCalculator(false);
    } else if (deliveryTime) {
      elMapModelWrap.innerHTML = '';
      const elNewChild = `<p class="map-model-text">
        Delivery in <span class="map-model-minut">00 min</span>
        </p>
        <p class="map-model-text">Continue to order?</p>
        <button class="map-model-btn map-model-btn-no" type="button">No</button>
        <button class="map-model-btn map-model-btn-yes" type="button">Yes</button>`;

      elMapModelWrap.insertAdjacentHTML('beforeend', elNewChild);
      const elMapModelMinut = document.querySelector('.map-model-minut');
      elMapModelMinut.textContent = deliveryTime[0] + ' min';
      deliveryCalculator(deliveryTime[0]);

      const elBtnContinYes = document.querySelector('.map-model-btn-yes');
      const elBtnContinNo = document.querySelector('.map-model-btn-no');

      elBtnContinYes.addEventListener('click', () => {
        elMapPayContainer.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
        elMapModelWrap.classList.remove('map-model-wrap-open');
      });

      elBtnContinNo.addEventListener('click', () => {
        placeKeyword = '';
        elMapModelWrap.classList.remove('map-model-wrap-open');
        deliveryCalculator(false);
        init();
      });
    }
  } else {
    inputs.forEach(input => {
      input.removeAttribute('readonly');
    });
    elInputLoc.disabled = false;
    switchEnterInput = true;
    elBtnForm.textContent = 'Save';
  }
};

elMapForm.addEventListener('submit', receivingInfoOrder);

elInputLoc.addEventListener('change', event => {
  if (event.currentTarget.checked) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      elInputAddr.value = `${latitude}, ${longitude}`;
    });
  }
});

elMapForm.scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'nearest',
});

//* Update list products on map-result
let saveProdArr = [];
elMapProdwrap.innerHTML = '';
saveProdArr = [...JSON.parse(localStorage.getItem('saveProdBask'))];
elMapProdwrap.insertAdjacentHTML('beforeend', saveProdArr.join(''));

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
    SubtotalCalculator();
    return;
  }

  //* Subtraction products
  if (elTarget.closest('#minusProduct')) {
    if (numberProd === 1) return;
    elNumberProd.textContent = --numberProd;
    elPriceProd.textContent =
      '$' + ((priceProd / (numberProd + 1)) * numberProd).toFixed(2);
    SubtotalCalculator();
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
    SubtotalCalculator();
  }
};
elMapProdwrap.addEventListener('click', operationsOnProdBask);

// --- Subtotal calculator --- //
let subtotalPrice = 0;
let deliveryPrice = 0;

const SubtotalCalculator = () => {
  const elCoustArr = elMapProdwrap.querySelectorAll('#priceProduct');
  subtotalPrice = 0;
  for (const element of elCoustArr) {
    subtotalPrice += parseFloat(element.textContent.replace('$', ''));
  }
  elMapPaySubtotal.textContent = '$' + subtotalPrice.toFixed(2);

  const elBtnDel = elMapProdwrap.querySelectorAll('.model-delete');
  elBtnDel.forEach(element => element.classList.add('model-delete-open'));

  totalPriceCalculator();
};
SubtotalCalculator();

// --- Delivery calculator --- //
function deliveryCalculator(time) {
  if (time) {
    deliveryPrice = (time / 3.2).toFixed(2);
    elMapPayDelivery.textContent = '$' + deliveryPrice;
    SubtotalCalculator();
    totalPriceCalculator();
  } else {
    elMapPayDelivery.textContent = 'we do not deliver there';
    elMapPaySubtotal.textContent = 'we do not deliver there';
    elMapPayTotalPrice.textContent = 'we do not deliver there';
  }
}

// --- Total Price Calculator --- //
function totalPriceCalculator() {
  elMapPayTotalPrice.textContent =
    '$' + (parseFloat(deliveryPrice) + subtotalPrice).toFixed(2);
}
