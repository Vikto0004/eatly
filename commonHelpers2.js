import"./assets/header-be749d18.js";/* empty css                      */import"./assets/header-click-color-0ea842b7.js";import{i as q,g as S,c as $,q as p,l as m,a as b,s as g}from"./assets/vendor-5b5f395c.js";import{e as B}from"./assets/scroll-up-f0ac5aba.js";import"./assets/open-close-faqs-bbc7a80b.js";const h=t=>t.map(({author:s,images:e,publishedAt:a,title:c})=>`<li class="latest-articles-item">
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
        <h3 class="latest-articles-questions">${c}</h3>
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
          <p class="latest-articles-date">${a}</p>
        </div>
      </li>`).join(""),r=document.querySelector(".latest-articles-list-js"),l=document.querySelector(".latest-articles-more-js"),o=document.querySelector(".latest-articles-backdrop-js"),i=document.querySelector(".latest-articles-answer-js"),I=document.querySelector(".latest-articles-questions"),j=document.querySelector(".latest-articles-date"),C=document.querySelector(".latest-answer-btn-js");let u=0,y=3,v="latest-articles",E=6;const x=[],D={apiKey:"AIzaSyCR0kAmNb9OqAWbGZEA3sJGJxmVfHTI72o",authDomain:"eatly-d7d44.firebaseapp.com",projectId:"eatly-d7d44",storageBucket:"eatly-d7d44.appspot.com",messagingSenderId:"804736586438",appId:"1:804736586438:web:a66af0c70aea356c53bdc7",measurementId:"G-B5LDCNKSKB"},T=q(D),f=S(T);async function k(t,n,s,e){const a=$(t,n);let c;if(s===0)c=p(a,m(e));else{const d=p(a,m(s)),w=await b(d),A=w.docs[w.docs.length-1];c=p(a,g(A),m(e))}return(await b(c)).docs.map(d=>d.data())}k(f,v,u,y).then(t=>{r.innerHTML=h(t),x.push(...t)}).catch(t=>console.log(t));l.addEventListener("click",()=>{l.classList.add("load"),l.disabled=!0,u+=y,k(f,v,u,y).then(t=>{r.insertAdjacentHTML("beforeend",h(t)),x.push(...t),l.classList.remove("load"),l.disabled=!1,window.scrollBy({top:400,behavior:"smooth"}),E===r.childElementCount&&(l.style.display="none")}).catch(t=>console.log(t))});r.addEventListener("click",t=>{if(t.currentTarget===t.target)return;const s=t.target.closest(".latest-articles-item").querySelector(".latest-articles-questions").textContent,{answer:e}=x.filter(({title:a})=>a===s)[0];I.textContent=s,j.textContent=e,G()});C.addEventListener("click",L);o.addEventListener("click",L);document.addEventListener("keydown",t=>{t.key==="Escape"&&L()});function G(){B.classList.remove("is-active-scroll"),o.style.display="block",i.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{o.classList.add("latest-backdrop-active"),i.classList.add("latest-answer-active")})}function L(){o.classList.remove("latest-backdrop-active"),i.classList.remove("latest-answer-active"),setTimeout(()=>{o.style.display="none",i.style.display="none",document.body.style.overflow="auto"},300)}
//# sourceMappingURL=commonHelpers2.js.map
