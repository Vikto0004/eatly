import"./assets/header-969a1f5c.js";/* empty css                      */import"./assets/open-close-faqs-cfb4e229.js";import"./assets/model-order-1f068d87.js";import"./assets/header-click-color-0ea842b7.js";document.querySelector(".js-result-search");const s=document.querySelector(".js-result-search-list"),e=document.querySelector(".js-result-search-titlte"),r=document.querySelector(".result-search-icon-cool"),c=document.querySelector(".result-search-icon-confused"),o=localStorage.getItem("numberResultSearch"),t=document.createElement("span");t.textContent="found";parseFloat(o)>0?(e.textContent=`${o} products were`,e.appendChild(t),r.classList.add("result-search-icon-open")):(e.textContent="Nothing",e.appendChild(t),c.classList.add("result-search-icon-open"));s.insertAdjacentHTML("beforeend",localStorage.getItem("resultSearch"));
//# sourceMappingURL=commonHelpers9.js.map
