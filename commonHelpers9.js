import"./assets/header-a472c3f4.js";/* empty css                      */import"./assets/swiper-baner-41b47521.js";import"./assets/model-order-b27102f1.js";import"./assets/open-close-faqs-3e48a4a1.js";import"./assets/header-click-color-0ea842b7.js";import"./assets/scroll-up-f0ac5aba.js";document.querySelector(".js-result-search");const r=document.querySelector(".js-result-search-list"),e=document.querySelector(".js-result-search-titlte"),s=document.querySelector(".result-search-icon-cool"),c=document.querySelector(".result-search-icon-confused"),o=localStorage.getItem("numberResultSearch"),t=document.createElement("span");t.textContent="found";parseFloat(o)>0?(e.textContent=`${o} products were`,e.appendChild(t),s.classList.add("result-search-icon-open")):(e.textContent="Nothing",e.appendChild(t),c.classList.add("result-search-icon-open"));r.insertAdjacentHTML("beforeend",localStorage.getItem("resultSearch"));
//# sourceMappingURL=commonHelpers9.js.map
