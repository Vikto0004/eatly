import"./assets/header-31341d69.js";/* empty css                      */import"./assets/header-click-color-0ea842b7.js";import{e as v}from"./assets/scroll-up-f0ac5aba.js";import{r as u}from"./assets/mockapi-0a9f77fa.js";import"./assets/open-close-faqs-3cfc2c04.js";const p=t=>t.map(({author:a,images:e,publishedAt:c,title:y})=>`<li class="latest-articles-item">
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
        <h3 class="latest-articles-questions">${y}</h3>
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
      </li>`).join(""),i=document.querySelector(".latest-articles-list-js"),s=document.querySelector(".latest-articles-more-js"),l=document.querySelector(".latest-articles-backdrop-js"),r=document.querySelector(".latest-articles-answer-js"),L=document.querySelector(".latest-articles-questions"),w=document.querySelector(".latest-articles-date"),h=document.querySelector(".latest-answer-btn-js");let o=1,m=3,k=3;const n=[];u(o,m).then(t=>{n.push(...t),i.innerHTML=p(t)}).catch(t=>console.log(t));s.addEventListener("click",()=>{s.classList.add("load"),s.disabled=!0,u(++o,m).then(t=>{s.classList.remove("load"),s.disabled=!1,i.insertAdjacentHTML("beforeend",p(t)),n.push(...t),window.scrollBy({top:400,behavior:"smooth"}),k===o&&(s.style.display="none")}).catch(t=>console.log(t))});i.addEventListener("click",t=>{if(t.currentTarget===t.target)return;const a=t.target.closest(".latest-articles-item").querySelector(".latest-articles-questions").textContent,{answer:e}=n.filter(({title:c})=>c===a)[0];L.textContent=a,w.textContent=e,b()});h.addEventListener("click",d);l.addEventListener("click",d);document.addEventListener("keydown",t=>{t.key==="Escape"&&d()});function b(){v.classList.remove("is-active-scroll"),l.style.display="block",r.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{l.classList.add("latest-backdrop-active"),r.classList.add("latest-answer-active")})}function d(){l.classList.remove("latest-backdrop-active"),r.classList.remove("latest-answer-active"),setTimeout(()=>{l.style.display="none",r.style.display="none",document.body.style.overflow="auto"},300)}
//# sourceMappingURL=commonHelpers2.js.map
