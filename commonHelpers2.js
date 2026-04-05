import{h as p}from"./assets/header-5ba821a5.js";/* empty css                      */import"./assets/header-click-color-0ea842b7.js";import{e as L}from"./assets/scroll-up-f0ac5aba.js";import{r as u}from"./assets/mockapi-0a9f77fa.js";import"./assets/open-close-faqs-3e48a4a1.js";const m=t=>t.map(({author:a,images:e,publishedAt:c,title:v})=>`<li class="latest-articles-item">
        <picture>
          <source
            srcset="
              ${e.desktop["1x"]} 1x,
              ${e.desktop["2x"]} 2x
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${e.tablet["1x"]} 1x,
              ${e.tablet["2x"]} 2x
            "
            media="(min-width: 1024px)"
          />
          <source
            srcset="
              ${e.mobil["1x"]} 1x,
              ${e.mobil["2x"]} 2x
            "
            media="(max-width: 1023px)"
          />
          <img
            class="latest-articles-img"
            src="${e.desktop["1x"]}" 
            alt="latest articles img"
          />
        </picture>
        <h3 class="latest-articles-questions">${v}</h3>
        <div class="latest-articles-wrap">
          <img
            srcset="
              ${e.avatar["1x"]} 1x,
              ${e.avatar["2x"]} 2x
            "
            alt="user"
            width="30px"
            height="30px"
          />
          <div>
            <p class="latest-articles-written">Written By</p>
            <p class="latest-articles-autor">${a}</p>
          </div>
          <p class="latest-articles-date">${c}</p>
        </div>
      </li>`).join(""),o=document.querySelector(".latest-articles-list-js"),s=document.querySelector(".latest-articles-more-js"),l=document.querySelector(".latest-articles-backdrop-js"),r=document.querySelector(".latest-articles-answer-js"),h=document.querySelector(".latest-articles-questions"),w=document.querySelector(".latest-articles-date"),k=document.querySelector(".latest-answer-btn-js");let i=1,x=3,b=3;const n=[];u(i,x).then(t=>{n.push(...t),o.innerHTML=m(t)}).catch(t=>console.log(t));s.addEventListener("click",()=>{s.classList.add("load"),s.disabled=!0,u(++i,x).then(t=>{s.classList.remove("load"),s.disabled=!1,o.insertAdjacentHTML("beforeend",m(t)),n.push(...t),window.scrollBy({top:400,behavior:"smooth"}),b===i&&(s.style.display="none")}).catch(t=>console.log(t))});o.addEventListener("click",t=>{if(t.currentTarget===t.target)return;const a=t.target.closest(".latest-articles-item").querySelector(".latest-articles-questions").textContent,{answer:e}=n.filter(({title:c})=>c===a)[0];h.textContent=a,w.textContent=e,f()});k.addEventListener("click",d);l.addEventListener("click",d);document.addEventListener("keydown",t=>{t.key==="Escape"&&d()});function f(){L.classList.remove("is-active-scroll"),l.style.display="block",r.style.display="flex",p("hide"),setTimeout(()=>{l.classList.add("latest-backdrop-active"),r.classList.add("latest-answer-active")})}function d(){l.classList.remove("latest-backdrop-active"),r.classList.remove("latest-answer-active"),setTimeout(()=>{l.style.display="none",r.style.display="none",p("show")},300)}
//# sourceMappingURL=commonHelpers2.js.map
