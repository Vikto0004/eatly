import{e as B}from"./scroll-up-f0ac5aba.js";const S=document.querySelector(".backrop"),w=document.querySelector("#closeBackrop");document.querySelectorAll("#openBackrop");const L=document.querySelector(".js-dishes-list"),g=document.querySelector(".order-form");document.querySelector("#priceProduct");document.querySelector("#product");document.querySelector("#numberProduct");document.querySelector("#plusProduct");document.querySelector("#minusProduct");const T=document.querySelector("#imgProduct img"),q=document.querySelector("#priceProduct"),F=document.querySelector("#product"),k=document.querySelector("#numberProduct"),N=document.querySelector("#plusProduct"),M=document.querySelector("#minusProduct"),$=document.querySelector(".model-order-container"),U=document.querySelector(".target-btn");document.querySelector(".button-order");const A=document.querySelector("#priceForOneProd"),f=document.querySelector(".basket-modal"),E=document.querySelector("#openBasket"),H=document.querySelector("#closeBasket"),a=document.querySelector(".basket-container"),v=document.querySelector("#quantity"),J=document.querySelector(".basket-wrap-price"),x=document.querySelector(".empty-basket"),C=document.querySelector(".basket-container"),D=document.querySelector(".basket-wrap-btn"),j=document.querySelector(".js-basket-login"),d=[],W=e=>{const t=e.target,o=e.target.closest(".dishes-list-item");if(!o)return;const r=o.querySelector(".dishes-list-icon");if(r===t||t.closest(".dishes-list-heart-link"))if(r.style.fill==="rgb(255, 255, 255)")r.style.fill="rgb(108, 95, 188)",d.push(r.id),localStorage.setItem("elHeardIcon",JSON.stringify(d));else{r.style.fill="rgb(255, 255, 255)";for(const i of d)i===r.id&&d.splice(d.indexOf(i),1);localStorage.setItem("elHeardIcon",JSON.stringify(d))}if(!t.closest(".dishes-container-btn"))return;const m=o.querySelector(".dishes-list-img").src,l=o.querySelector(".dishes-container-text").textContent,s=o.querySelector(".dishes-wrap-title").textContent;T.src=m,q.textContent=l,A.textContent=l,F.textContent=s,k.textContent=1;let c=parseFloat(k.textContent),y=parseFloat(l.replace("$",""));N.addEventListener("click",()=>{k.textContent=++c,q.textContent="$"+(y*c).toFixed(2)}),M.addEventListener("click",()=>{c!==1&&(k.textContent=--c,q.textContent="$"+(y*c).toFixed(2))}),S.style.display="block",document.body.style.overflow="hidden",setTimeout(function(){S.style.opacity="1"},50),B.classList.remove("is-active-scroll"),w.addEventListener("click",b),window.onclick=i=>{i.target==S&&b()}};L.addEventListener("click",W);function b(){S.style.opacity="0",setTimeout(function(){S.style.display="none",document.body.style.overflow="auto"},500)}let n=[],u=0;n.length===0&&localStorage.getItem("saveProdBask")?(n=[...JSON.parse(localStorage.getItem("saveProdBask"))],u=JSON.parse(localStorage.getItem("counterId")),v.textContent=n.length):(u=0,localStorage.setItem("counterId",u));const I=()=>{n.push(`<div class="model-order-container" id="numProdBask${++u}">${$.innerHTML}</div>`),localStorage.setItem("saveProdBask",JSON.stringify(n)),localStorage.setItem("counterId",JSON.stringify(u)),v.textContent=n.length,b()};U.addEventListener("click",I);D.addEventListener("click",()=>{n=[...C.children];const e=n.reduce((t,o)=>(t.push(`<div class="model-order-container" id="numProdBask${++u}">${o.innerHTML}</div>`),t),[]);localStorage.setItem("saveProdBask",JSON.stringify(e)),window.location.href="menu-map.html"});g.addEventListener("submit",e=>{e.preventDefault();const t={nameUser:"",emailUser:"",addressUser:""};t.nameUser=g.elements.nameUser.value.trim(),t.emailUser=g.elements.mailUser.value.trim(),t.addressUser=g.elements.addrUser.value.trim(),localStorage.setItem("seveInfoUserForOrder",JSON.stringify(t)),I(),window.location.href="menu-map.html"});let p="";document.onclick=e=>{e.target!==p&&p&&(p.style.display="none",p="")};const z=e=>{const t=e.target,o=t.nodeName;if(!(o==="BUTTON"||o==="svg"||o==="use"))return;const r=t.closest(".model-order-container"),m=r.querySelector("#numberProduct"),l=r.querySelector("#priceProduct");let s=parseFloat(m.textContent),c=parseFloat(l.textContent.replace("$",""));if(t.closest("#plusProduct")){m.textContent=++s,l.textContent="$"+(c/(s-1)*s).toFixed(2),P();return}if(t.closest("#minusProduct")){if(s===1)return;m.textContent=--s,l.textContent="$"+(c/(s+1)*s).toFixed(2),P();return}if(t.closest(".button-open-delete"))r.querySelector(".delete-wrap").style.display="block",setTimeout(()=>{p=r.querySelector(".delete-wrap")},100);else if(t.closest(".delete-wrap-btn")){const y=n.filter(i=>!i.includes(`id="${r.id}"`));n=y,localStorage.setItem("saveProdBask",JSON.stringify(y)),r.remove(),P(),h()}};C.addEventListener("click",z);const G=e=>{f.style.display="block",document.body.style.overflow="hidden",j.style.display="flex",B.classList.remove("is-active-scroll"),a.innerHTML="",a.insertAdjacentHTML("beforeend",n.join("")),a.querySelectorAll(".model-delete").forEach(o=>o.classList.add("model-delete-open")),setTimeout(()=>f.style.opacity="1",50),P(),h()};E.addEventListener("click",G);const O=()=>{f.style.opacity="0",setTimeout(function(){f.style.display="none",document.body.style.overflow="auto"},500),v.textContent=a.children.length};window.onclick=e=>{e.target===f&&O()};H.addEventListener("click",O);const P=()=>{const e=a.querySelectorAll("#priceProduct");let t=0;for(const o of e)t+=parseFloat(o.textContent.replace("$",""));J.textContent="$"+t.toFixed(2)},h=()=>{a.children.length>0?x.style.display="none":x.style.display="block"};h();const K=()=>{const e=JSON.parse(localStorage.getItem("elHeardIcon"));if(e)for(const t of e){d.push(t);const o=document.querySelector(`#${t}`);o&&(o.style.fill="rgb(108, 95, 188)")}};K();const Q=document.querySelectorAll(".dishes-wrap-text");for(const e of Q)e.textContent==="Trending"?(e.style.background="#F7C5BA",e.style.color="#FB471D"):e.textContent==="Supreme"&&(e.style.background="#40e683",e.style.opacity="0.5",e.style.color="#198042");
//# sourceMappingURL=model-order-b27102f1.js.map
