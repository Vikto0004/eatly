const r=document.querySelectorAll(".header-nav-item"),t=document.location.href.split("/"),n=t[t.length-1];for(const e of r)e.firstElementChild.getAttribute("href")===`./${n}`&&(e.firstElementChild.style.color="#6C5FBC",e.classList.add("curent-page"));const o=document.querySelector(".header");o.classList.remove("js-header-animation");
//# sourceMappingURL=header-click-color-0ea842b7.js.map
