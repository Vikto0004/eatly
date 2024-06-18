import"./assets/header-e80aefe2.js";/* empty css                      */function O(e,r=""){var n={zoom:12,center:new google.maps.LatLng(52.240915614730774,21.01291000372966),styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]},t=document.getElementById("map"),o=new google.maps.Map(t,n),i=new google.maps.Marker({position:new google.maps.LatLng(52.240915614730774,21.01291000372966),map:o}),l=new google.maps.Marker({position:new google.maps.LatLng(52.266217,20.949499),map:o}),d=new google.maps.Marker({position:new google.maps.LatLng(52.24195567123645,21.080850309662644),map:o}),T=new google.maps.Marker({position:new google.maps.LatLng(52.17985629558261,21.031027418645124),map:o});const E=new google.maps.Geocoder;function R(m){return new Promise((w,L)=>{E.geocode({address:m},function(u,h){if(h===google.maps.GeocoderStatus.OK&&u.length>0){const p=u[0].geometry.location,F=[p.lat(),p.lng()];w(F)}else L("Error getting coordinates")})})}if(r)return R(r).then(m=>{const w=m[0],L=m[1],u=new google.maps.DirectionsService,h=new google.maps.DirectionsRenderer;h.setMap(o);const p=[[52.266217,20.949499],[52.240915614730774,21.01291000372966],[52.24195567123645,21.080850309662644],[52.17985629558261,21.031027418645124]];async function F(y,x,N){let f=1/0,S=0;for(let c=0;c<y.length;c++){const M=y[c],G=new google.maps.LatLng(x,N),W=new google.maps.LatLng(M[0],M[1]),J={origin:G,destination:W,travelMode:google.maps.TravelMode.DRIVING},K=await new Promise((Y,z)=>{u.route(J,function(_,Q){Q==google.maps.DirectionsStatus.OK?Y(_):z("Error getting route")})}),$=parseFloat(K.routes[0].legs[0].duration.text);$<f&&(f=$,S=c)}return{time:f,indexPos:S}}return F(p,w,L).then(({time:y,indexPos:x})=>{const N=new google.maps.LatLng(w,L),f=new google.maps.LatLng(p[x][0],p[x][1]),S={origin:N,destination:f,travelMode:google.maps.TravelMode.DRIVING};return u.route(S,function(c,M){r&&(i.setVisible(!1),l.setVisible(!1),d.setVisible(!1),T.setVisible(!1)),M==google.maps.DirectionsStatus.OK&&(h.setDirections(c),c.routes[0].legs[0].duration.text)})}).catch(y=>{console.error("Помилка:",y)})}).catch(m=>{console.error(m)})}google.maps.event.addDomListener(window,"load",O);const a=document.querySelector(".map-entry-form"),P=document.querySelector(".map-entry-input-location"),k=document.querySelector(".input-user-addr"),X=document.querySelector("#map"),s=document.querySelector(".map-model-wrap"),Z=document.querySelector(".map-payment-container"),b=document.querySelector(".map-products-wrap"),j=document.querySelector(".js-map-payment-subtotal"),V=document.querySelector(".js-map-payment-delivery"),H=document.querySelector(".js-map-payment-text-total");let D=!0,A="";if(localStorage.getItem("seveInfoUserForOrder")){const e=JSON.parse(localStorage.getItem("seveInfoUserForOrder"));a.elements.userName.value=e.nameUser,a.elements.userEmail.value=e.emailUser,a.elements.userAddr.value=e.addressUser}const ee=async e=>{e.preventDefault(),a.elements.userName.value.trim(),a.elements.userEmail.value.trim();const r=a.querySelectorAll("input"),n=a.elements[4];if(A=k.value.trim(),k.addEventListener("focus",()=>P.checked=!1),k.value.trim(),D){r.forEach(o=>{o.setAttribute("readonly",!0)}),P.disabled=!0,D=!1,n.textContent="Change",X.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),s.classList.add("map-model-wrap-open");const t=await O(e,A).then(o=>o.routes[0].legs[0].duration.text.split(" ")).catch(o=>{s.innerHTML='<p class="map-model-text">We did not find this place :(</p>',C(!1)});if(t&&t[2]){s.innerHTML="";const o='<p class="map-model-text">We do not deliver products when delivery is longer than an hour :(</p>';s.insertAdjacentHTML("beforeend",o),C(!1)}else if(t){s.innerHTML="";const o=`<p class="map-model-text">
        Delivery in <span class="map-model-minut">00 min</span>
        </p>
        <p class="map-model-text">Continue to order?</p>
        <button class="map-model-btn map-model-btn-no" type="button">No</button>
        <button class="map-model-btn map-model-btn-yes" type="button">Yes</button>`;s.insertAdjacentHTML("beforeend",o);const i=document.querySelector(".map-model-minut");i.textContent=t[0]+" min",C(t[0]);const l=document.querySelector(".map-model-btn-yes"),d=document.querySelector(".map-model-btn-no");l.addEventListener("click",()=>{Z.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),s.classList.remove("map-model-wrap-open")}),d.addEventListener("click",()=>{A="",s.classList.remove("map-model-wrap-open"),C(!1),O()})}}else r.forEach(t=>{t.removeAttribute("readonly")}),P.disabled=!1,D=!0,n.textContent="Save"};a.addEventListener("submit",ee);P.addEventListener("change",e=>{e.currentTarget.checked&&navigator.geolocation.getCurrentPosition(function(r){const n=r.coords.latitude,t=r.coords.longitude;k.value=`${n}, ${t}`})});a.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});let I=[];b.innerHTML="";I=[...JSON.parse(localStorage.getItem("saveProdBask"))];b.insertAdjacentHTML("beforeend",I.join(""));let g="";document.onclick=e=>{e.target!==g&&g&&(g.style.display="none",g="")};const te=e=>{const r=e.target,n=r.nodeName;if(!(n==="BUTTON"||n==="svg"||n==="use"))return;const t=r.closest(".model-order-container"),o=t.querySelector("#numberProduct"),i=t.querySelector("#priceProduct");let l=parseFloat(o.textContent),d=parseFloat(i.textContent.replace("$",""));if(r.closest("#plusProduct")){o.textContent=++l,i.textContent="$"+(d/(l-1)*l).toFixed(2),v();return}if(r.closest("#minusProduct")){if(l===1)return;o.textContent=--l,i.textContent="$"+(d/(l+1)*l).toFixed(2),v();return}if(r.closest(".button-open-delete"))t.querySelector(".delete-wrap").style.display="block",setTimeout(()=>{g=t.querySelector(".delete-wrap")},100);else if(r.closest(".delete-wrap-btn")){const T=I.filter(E=>!E.includes(`id="${t.id}"`));I=T,localStorage.setItem("saveProdBask",JSON.stringify(T)),t.remove(),v()}};b.addEventListener("click",te);let q=0,B=0;const v=()=>{const e=b.querySelectorAll("#priceProduct");q=0;for(const n of e)q+=parseFloat(n.textContent.replace("$",""));j.textContent="$"+q.toFixed(2),b.querySelectorAll(".model-delete").forEach(n=>n.classList.add("model-delete-open")),U()};v();function C(e){e?(B=(e/3.2).toFixed(2),V.textContent="$"+B,v(),U()):(V.textContent="we do not deliver there",j.textContent="we do not deliver there",H.textContent="we do not deliver there")}function U(){H.textContent="$"+(parseFloat(B)+q).toFixed(2)}
//# sourceMappingURL=commonHelpers6.js.map
