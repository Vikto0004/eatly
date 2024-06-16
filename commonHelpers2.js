import"./assets/header-be749d18.js";/* empty css                      */import"./assets/header-click-color-0ea842b7.js";import{e as h}from"./assets/scroll-up-f0ac5aba.js";import"./assets/open-close-faqs-3cfc2c04.js";const u=t=>t.map(({author:s,images:e,publishedAt:o,title:x})=>`<li class="latest-articles-item">
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
        <h3 class="latest-articles-questions">${x}</h3>
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
            <p class="latest-articles-autor">${s}</p>
          </div>
          <p class="latest-articles-date">${o}</p>
        </div>
      </li>`).join("");function m(t=1,r=3){const s=new URL("https://666d953c7a3738f7caccc458.mockapi.io/articles");return s.searchParams.append("page",t),s.searchParams.append("limit",r),fetch(s,{method:"GET",headers:{"content-type":"application/json"}}).then(e=>{if(!e.ok)throw new Error;return e.json()}).catch(e=>console.log(e))}const n=document.querySelector(".latest-articles-list-js"),a=document.querySelector(".latest-articles-more-js"),l=document.querySelector(".latest-articles-backdrop-js"),c=document.querySelector(".latest-articles-answer-js"),v=document.querySelector(".latest-articles-questions"),w=document.querySelector(".latest-articles-date"),L=document.querySelector(".latest-answer-btn-js");let i=1,y=3,k=3;const d=[];m(i,y).then(t=>{d.push(...t),n.innerHTML=u(t)}).catch(t=>console.log(t));a.addEventListener("click",()=>{a.classList.add("load"),a.disabled=!0,m(++i,y).then(t=>{a.classList.remove("load"),a.disabled=!1,n.insertAdjacentHTML("beforeend",u(t)),d.push(...t),window.scrollBy({top:400,behavior:"smooth"}),k===i&&(a.style.display="none")}).catch(t=>console.log(t))});n.addEventListener("click",t=>{if(t.currentTarget===t.target)return;const s=t.target.closest(".latest-articles-item").querySelector(".latest-articles-questions").textContent,{answer:e}=d.filter(({title:o})=>o===s)[0];v.textContent=s,w.textContent=e,f()});L.addEventListener("click",p);l.addEventListener("click",p);document.addEventListener("keydown",t=>{t.key==="Escape"&&p()});function f(){h.classList.remove("is-active-scroll"),l.style.display="block",c.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{l.classList.add("latest-backdrop-active"),c.classList.add("latest-answer-active")})}function p(){l.classList.remove("latest-backdrop-active"),c.classList.remove("latest-answer-active"),setTimeout(()=>{l.style.display="none",c.style.display="none",document.body.style.overflow="auto"},300)}
//# sourceMappingURL=commonHelpers2.js.map
