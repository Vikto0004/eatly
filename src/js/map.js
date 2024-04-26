google.maps.event.addDomListener(window, 'load', init);

let getTimeDelivery;
let placeKeyword = '';

function init() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(52.240915614730774, 21.01291000372966),
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry.fill',
        stylers: [
          {
            weight: '2.00',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#9c9c9c',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2f2f2',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#7b7b7b',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#46bcec',
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#c8d7d4',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#070707',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
    ],
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);

  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(52.240915614730774, 21.01291000372966),
    map: map,
  });
  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(52.266217, 20.949499),
    map: map,
  });
  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(52.24195567123645, 21.080850309662644),
    map: map,
  });
  var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(52.17985629558261, 21.031027418645124),
    map: map,
  });

  const geocoder = new google.maps.Geocoder();

  // Функція для отримання координат місця за ключовим словом
  function getPlaceCoordinates(placeKeyword) {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: placeKeyword }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
          const location = results[0].geometry.location;
          const res = [location.lat(), location.lng()];
          resolve(res); // Викликаємо resolve з результатом
        } else {
          console.error(
            'Не вдалося знайти координати місця за ключовим словом:',
            status
          );
          reject(new Error('Помилка отримання координат')); // Викликаємо reject у випадку помилки
        }
      });
    });
  }

  if (placeKeyword) {
    getPlaceCoordinates(placeKeyword)
      .then(coordinates => {
        const latMyLoc = coordinates[0];
        const lngMyLoc = coordinates[1];

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const arrayPos = [
          [52.266217, 20.949499],
          [52.240915614730774, 21.01291000372966],
          [52.24195567123645, 21.080850309662644],
          [52.17985629558261, 21.031027418645124],
        ];

        async function findFastestRoute(arrayPos, latMyLoc, lngMyLoc) {
          let time = Infinity;
          let indexPos = 0;

          for (let index = 0; index < arrayPos.length; index++) {
            const position = arrayPos[index];
            const start = new google.maps.LatLng(latMyLoc, lngMyLoc);
            const end = new google.maps.LatLng(position[0], position[1]);
            const request = {
              origin: start,
              destination: end,
              travelMode: google.maps.TravelMode.DRIVING,
            };

            const result = await new Promise((resolve, reject) => {
              directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                  resolve(result);
                } else {
                  reject(new Error('Помилка отримання маршруту'));
                }
              });
            });

            const duration = parseFloat(result.routes[0].legs[0].duration.text);
            if (duration < time) {
              time = duration;
              indexPos = index;
            }
          }

          return { time, indexPos };
        }

        findFastestRoute(arrayPos, latMyLoc, lngMyLoc)
          .then(({ time, indexPos }) => {
            const start = new google.maps.LatLng(latMyLoc, lngMyLoc);
            const end = new google.maps.LatLng(
              arrayPos[indexPos][0],
              arrayPos[indexPos][1]
            );
            const request = {
              origin: start,
              destination: end,
              travelMode: google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, function (result, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                const duration = result.routes[0].legs[0].duration.text;
                getTimeDelivery = duration;
              }
              if (placeKeyword) {
                marker1.setVisible(false);
                marker2.setVisible(false);
                marker3.setVisible(false);
                marker4.setVisible(false);
              }
            });
          })
          .catch(error => {
            console.error('Помилка:', error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

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

const receivingInfoOrder = event => {
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

    init();
    elMap.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });

    elMapModelWrap.classList.add('map-model-wrap-open');
    setTimeout(() => {
      const parts = getTimeDelivery.split(' ');

      if (parts[2]) {
        elMapModelWrap.innerHTML = '';
        const elNewChild = `<p class="map-model-text">We do not deliver products when delivery is longer than an hour :(</p>`;
        elMapModelWrap.insertAdjacentHTML('beforeend', elNewChild);
        deliveryCalculator(false);
      } else {
        elMapModelWrap.innerHTML = '';
        const elNewChild = `<p class="map-model-text">
        Delivery in <span class="map-model-minut">00 min</span>
        </p>
        <p class="map-model-text">Continue to order?</p>
        <button class="map-model-btn map-model-btn-no" type="button">No</button>
        <button class="map-model-btn map-model-btn-yes" type="button">Yes</button>`;

        elMapModelWrap.insertAdjacentHTML('beforeend', elNewChild);
        const elMapModelMinut = document.querySelector('.map-model-minut');
        elMapModelMinut.textContent = parts[0] + ' min';
        deliveryCalculator(parts[0]);

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
    }, 1500);
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
