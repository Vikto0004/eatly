export function init(event, placeKeyword = '') {
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

  function getPlaceCoordinates(placeKeyword) {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: placeKeyword }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
          const location = results[0].geometry.location;
          const res = [location.lat(), location.lng()];
          resolve(res);
        } else {
          reject('Error getting coordinates');
        }
      });
    });
  }

  if (placeKeyword) {
    return getPlaceCoordinates(placeKeyword)
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
                  reject('Error getting route');
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

        return findFastestRoute(arrayPos, latMyLoc, lngMyLoc)
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

            return directionsService.route(request, function (result, status) {
              if (placeKeyword) {
                marker1.setVisible(false);
                marker2.setVisible(false);
                marker3.setVisible(false);
                marker4.setVisible(false);
              }
              if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                const duration = result.routes[0].legs[0].duration.text;
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
