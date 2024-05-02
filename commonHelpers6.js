import"./assets/header-5b526b3e.js";/* empty css                      */google.maps.event.addDomListener(window,"load",A);let j,b="";function A(){var e={zoom:12,center:new google.maps.LatLng(52.240915614730774,21.01291000372966),styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]},r=document.getElementById("map"),t=new google.maps.Map(r,e),o=new google.maps.Marker({position:new google.maps.LatLng(52.240915614730774,21.01291000372966),map:t}),l=new google.maps.Marker({position:new google.maps.LatLng(52.266217,20.949499),map:t}),i=new google.maps.Marker({position:new google.maps.LatLng(52.24195567123645,21.080850309662644),map:t}),n=new google.maps.Marker({position:new google.maps.LatLng(52.17985629558261,21.031027418645124),map:t});const d=new google.maps.Geocoder;function L(s){return new Promise((S,x)=>{d.geocode({address:s},function(u,y){if(y===google.maps.GeocoderStatus.OK&&u.length>0){const p=u[0].geometry.location,E=[p.lat(),p.lng()];S(E)}else console.error("Не вдалося знайти координати місця за ключовим словом:",y),x(new Error("Помилка отримання координат"))})})}b&&L(b).then(s=>{const S=s[0],x=s[1],u=new google.maps.DirectionsService,y=new google.maps.DirectionsRenderer;y.setMap(t);const p=[[52.266217,20.949499],[52.240915614730774,21.01291000372966],[52.24195567123645,21.080850309662644],[52.17985629558261,21.031027418645124]];async function E(f,h,D){let g=1/0,C=0;for(let c=0;c<f.length;c++){const M=f[c],B=new google.maps.LatLng(h,D),G=new google.maps.LatLng(M[0],M[1]),K={origin:B,destination:G,travelMode:google.maps.TravelMode.DRIVING},J=await new Promise((W,Y)=>{u.route(K,function(z,_){_==google.maps.DirectionsStatus.OK?W(z):Y(new Error("Помилка отримання маршруту"))})}),$=parseFloat(J.routes[0].legs[0].duration.text);$<g&&(g=$,C=c)}return{time:g,indexPos:C}}E(p,S,x).then(({time:f,indexPos:h})=>{const D=new google.maps.LatLng(S,x),g=new google.maps.LatLng(p[h][0],p[h][1]),C={origin:D,destination:g,travelMode:google.maps.TravelMode.DRIVING};u.route(C,function(c,M){M==google.maps.DirectionsStatus.OK&&(y.setDirections(c),j=c.routes[0].legs[0].duration.text),b&&(o.setVisible(!1),l.setVisible(!1),i.setVisible(!1),n.setVisible(!1))})}).catch(f=>{console.error("Помилка:",f)})}).catch(s=>{console.error(s)})}const a=document.querySelector(".map-entry-form"),P=document.querySelector(".map-entry-input-location"),k=document.querySelector(".input-user-addr"),Q=document.querySelector("#map"),m=document.querySelector(".map-model-wrap"),X=document.querySelector(".map-payment-container"),w=document.querySelector(".map-products-wrap"),U=document.querySelector(".js-map-payment-subtotal"),V=document.querySelector(".js-map-payment-delivery"),H=document.querySelector(".js-map-payment-text-total");let F=!0;if(localStorage.getItem("seveInfoUserForOrder")){const e=JSON.parse(localStorage.getItem("seveInfoUserForOrder"));a.elements.userName.value=e.nameUser,a.elements.userEmail.value=e.emailUser,a.elements.userAddr.value=e.addressUser}const Z=e=>{e.preventDefault(),a.elements.userName.value.trim(),a.elements.userEmail.value.trim();const r=a.querySelectorAll("input"),t=a.elements[4];b=k.value.trim(),k.addEventListener("focus",()=>P.checked=!1),k.value.trim(),F?(r.forEach(o=>{o.setAttribute("readonly",!0)}),P.disabled=!0,F=!1,t.textContent="Change",A(),Q.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),m.classList.add("map-model-wrap-open"),setTimeout(()=>{const o=j.split(" ");if(o[2]){m.innerHTML="";const l='<p class="map-model-text">We do not deliver products when delivery is longer than an hour :(</p>';m.insertAdjacentHTML("beforeend",l),N(!1)}else{m.innerHTML="";const l=`<p class="map-model-text">
        Delivery in <span class="map-model-minut">00 min</span>
        </p>
        <p class="map-model-text">Continue to order?</p>
        <button class="map-model-btn map-model-btn-no" type="button">No</button>
        <button class="map-model-btn map-model-btn-yes" type="button">Yes</button>`;m.insertAdjacentHTML("beforeend",l);const i=document.querySelector(".map-model-minut");i.textContent=o[0]+" min",N(o[0]);const n=document.querySelector(".map-model-btn-yes"),d=document.querySelector(".map-model-btn-no");n.addEventListener("click",()=>{X.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),m.classList.remove("map-model-wrap-open")}),d.addEventListener("click",()=>{b="",m.classList.remove("map-model-wrap-open"),N(!1),A()})}},1500)):(r.forEach(o=>{o.removeAttribute("readonly")}),P.disabled=!1,F=!0,t.textContent="Save")};a.addEventListener("submit",Z);P.addEventListener("change",e=>{e.currentTarget.checked&&navigator.geolocation.getCurrentPosition(function(r){const t=r.coords.latitude,o=r.coords.longitude;k.value=`${t}, ${o}`})});a.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});let I=[];w.innerHTML="";I=[...JSON.parse(localStorage.getItem("saveProdBask"))];w.insertAdjacentHTML("beforeend",I.join(""));let v="";document.onclick=e=>{e.target!==v&&v&&(v.style.display="none",v="")};const ee=e=>{const r=e.target,t=r.nodeName;if(!(t==="BUTTON"||t==="svg"||t==="use"))return;const o=r.closest(".model-order-container"),l=o.querySelector("#numberProduct"),i=o.querySelector("#priceProduct");let n=parseFloat(l.textContent),d=parseFloat(i.textContent.replace("$",""));if(r.closest("#plusProduct")){l.textContent=++n,i.textContent="$"+(d/(n-1)*n).toFixed(2),T();return}if(r.closest("#minusProduct")){if(n===1)return;l.textContent=--n,i.textContent="$"+(d/(n+1)*n).toFixed(2),T();return}if(r.closest(".button-open-delete"))o.querySelector(".delete-wrap").style.display="block",setTimeout(()=>{v=o.querySelector(".delete-wrap")},100);else if(r.closest(".delete-wrap-btn")){const L=I.filter(s=>!s.includes(`id="${o.id}"`));I=L,localStorage.setItem("saveProdBask",JSON.stringify(L)),o.remove(),T()}};w.addEventListener("click",ee);let q=0,O=0;const T=()=>{const e=w.querySelectorAll("#priceProduct");q=0;for(const t of e)q+=parseFloat(t.textContent.replace("$",""));U.textContent="$"+q.toFixed(2),w.querySelectorAll(".model-delete").forEach(t=>t.classList.add("model-delete-open")),R()};T();function N(e){e?(O=(e/3.2).toFixed(2),V.textContent="$"+O,T(),R()):(V.textContent="we do not deliver there",U.textContent="we do not deliver there",H.textContent="we do not deliver there")}function R(){H.textContent="$"+(parseFloat(O)+q).toFixed(2)}
//# sourceMappingURL=commonHelpers6.js.map
