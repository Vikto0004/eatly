import"./assets/header-03527577.js";/* empty css                      */import"./assets/open-close-faqs-1f6bb6c2.js";import"./assets/main-fa2bfaed.js";import"./assets/header-click-color-33c8e684.js";import"./assets/model-order-5eca164f.js";const i={dishes:[],pizza:[],donat:[]},g=document.querySelector(".js-dishes"),x=document.querySelector(".js-pizza"),C=document.querySelector(".js-donat"),E=g.nextElementSibling.children,b=x.nextElementSibling.children,v=C.nextElementSibling.children,S=[],p=(t,e)=>{for(const r of t){const o=r.querySelector(".dishes-wrap-title").textContent,l=parseFloat(r.querySelector(".dishes-container-text").textContent.replace("$","")),n={};n.elementReference=r.outerHTML,n.price=l,n.name=o,S.push(o),r.querySelector(".dishes-wrap-text").textContent==="Healthy"?(n.popular=!1,n.recomended=!0):r.querySelector(".dishes-wrap-text").textContent==="Trending"?(n.popular=!0,n.recomended=!1):(n.popular=!1,n.recomended=!1),i[e].push(n)}};p(E,"dishes");p(b,"pizza");p(v,"donat");const w=document.getElementsByName("sort-group"),L=document.getElementsByName("sort");let m="pizza",c="recomended";for(const t of w)t.addEventListener("input",e=>{m=e.target.id});for(const t of L)t.addEventListener("input",e=>{c=e.target.id});const P=document.querySelector(".price-slider-input"),a=document.querySelector(".price-slider-output");let u=0;const q=t=>{a.textContent=t.target.value,parseFloat(t.target.value)>50?(u=parseFloat(t.target.value),a.style.left=2.088*(-15+parseFloat(t.target.value))+"px"):(a.style.left=2.088*(-10+parseFloat(t.target.value))+"px",u=parseFloat(t.target.value))};P.addEventListener("input",q);const R=document.querySelector(".search-aplly-btn");class T{constructor(e){this.arrayProducts=e}getResultSearch(){const e=[];for(const r of this.arrayProducts)e.push(r.elementReference);localStorage.setItem("numberResultSearch",`${e.length}`),localStorage.setItem("resultSearch",e.join("")),window.location.href="./result-search.html"}popularSort(){this.arrayProducts.sort((e,r)=>e.popular?-1:1),this.getResultSearch()}recomendedSort(){this.arrayProducts.sort(e=>e.recomended?-1:1),this.getResultSearch()}lowestPriceSort(){this.arrayProducts.sort((e,r)=>e.price-r.price),this.getResultSearch()}highestPriceSort(){this.arrayProducts.sort((e,r)=>r.price-e.price),this.getResultSearch()}}const j=()=>{if(u===0)a.style.color="#F7433D",a.style.textShadow="0 0 5px #F8564F",setTimeout(function(){a.style.color="#fff",a.style.textShadow=""},2e3);else{const t=i[m].map(r=>r.price<=u?r:void 0).filter(r=>r!==void 0),e=new T(t);c==="popular"?e.popularSort():c==="recomended"?e.recomendedSort():c==="lowest-price"?e.lowestPriceSort():c==="highest-price"&&e.highestPriceSort()}};R.addEventListener("click",j);const d=document.querySelector(".js-search-input"),s=document.querySelector(".js-search-name-container"),f=document.querySelector(".js-search-name-list"),z=document.querySelector(".js-search-input-btn"),F=S.filter((t,e,r)=>r.indexOf(t)===e).sort().reduce((t,e)=>t+=`<li><p>${e}</p></li>`,"");f.insertAdjacentHTML("beforeend",F);const N=()=>{s.style.display="block",setTimeout(()=>{s.style.height="40vh"},0)};d.addEventListener("focus",N);const k=()=>{s.style.height="0vh",setTimeout(()=>{s.style.display="none"},500)};d.addEventListener("blur",k);const I=t=>{let e=t.target.value.trim().toUpperCase();const r=document.querySelectorAll(".js-search-name-list li p");e!==""?r.forEach(o=>{if(o.textContent.toUpperCase().search(e)==-1){o.parentNode.style.display="none",o.innerHTML=o.innerText,s.style.height="auto";let l=window.getComputedStyle(s);parseFloat(l.height)>window.innerHeight*.4&&(s.style.height="40vh")}else{o.parentNode.style.display="block";let l=o.textContent,n=o.innerText.search(e),h=e.length;o.innerHTML=`${l.slice(0,n)}<mark>${l.slice(n,n+h)}</mark>${l.slice(n+h)}`}}):r.forEach(o=>{o.parentNode.style.display="block",o.innerHTML=o.innerText,s.style.height="40vh"})};d.addEventListener("input",I);const H=t=>{t.target!==t.currentTarget&&y(t.target.textContent)};f.addEventListener("click",H);const $=t=>{t.preventDefault();const e=d.value.trim();y(e)};z.addEventListener("click",$);function y(t){const e=[];for(const r in i)for(const o of i[r])o.name.toUpperCase().search(t.toUpperCase())!==-1&&e.push(o.elementReference);localStorage.setItem("numberResultSearch",`${e.length}`),localStorage.setItem("resultSearch",e.join("")),location.href="result-search.html"}
//# sourceMappingURL=commonHelpers7.js.map
