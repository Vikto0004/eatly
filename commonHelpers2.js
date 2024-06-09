import"./assets/header-be749d18.js";/* empty css                      */import"./assets/header-click-color-0ea842b7.js";import{i as q,g as S,c as $,q as p,l as m,a as b,s as g}from"./assets/vendor-b1deaf70.js";import"./assets/scroll-up-d5f6b3dd.js";import"./assets/open-close-faqs-82b30f1e.js";const h=t=>t.map(({author:s,images:e,publishedAt:a,title:c})=>`<li class="latest-articles-item">
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
      </li>`).join(""),r=document.querySelector(".latest-articles-list-js"),l=document.querySelector(".latest-articles-more-js"),o=document.querySelector(".latest-articles-backdrop-js"),i=document.querySelector(".latest-articles-answer-js"),B=document.querySelector(".latest-articles-questions"),I=document.querySelector(".latest-articles-date"),j=document.querySelector(".latest-answer-btn-js");let u=0,y=3,v="latest-articles",C=6;const x=[],E={apiKey:"AIzaSyCR0kAmNb9OqAWbGZEA3sJGJxmVfHTI72o",authDomain:"eatly-d7d44.firebaseapp.com",projectId:"eatly-d7d44",storageBucket:"eatly-d7d44.appspot.com",messagingSenderId:"804736586438",appId:"1:804736586438:web:a66af0c70aea356c53bdc7",measurementId:"G-B5LDCNKSKB"},D=q(E),f=S(D);async function k(t,n,s,e){const a=$(t,n);let c;if(s===0)c=p(a,m(e));else{const d=p(a,m(s)),L=await b(d),A=L.docs[L.docs.length-1];c=p(a,g(A),m(e))}return(await b(c)).docs.map(d=>d.data())}k(f,v,u,y).then(t=>{r.innerHTML=h(t),x.push(...t)}).catch(t=>console.log(t));l.addEventListener("click",()=>{l.classList.add("load"),l.disabled=!0,u+=y,k(f,v,u,y).then(t=>{r.insertAdjacentHTML("beforeend",h(t)),x.push(...t),l.classList.remove("load"),l.disabled=!1,window.scrollBy({top:400,behavior:"smooth"}),C===r.childElementCount&&(l.style.display="none")}).catch(t=>console.log(t))});r.addEventListener("click",t=>{if(t.currentTarget===t.target)return;const s=t.target.closest(".latest-articles-item").querySelector(".latest-articles-questions").textContent,{answer:e}=x.filter(({title:a})=>a===s)[0];B.textContent=s,I.textContent=e,T()});j.addEventListener("click",w);o.addEventListener("click",w);document.addEventListener("keydown",t=>{t.key==="Escape"&&w()});function T(){o.style.display="block",i.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{o.classList.add("latest-backdrop-active"),i.classList.add("latest-answer-active")})}function w(){o.classList.remove("latest-backdrop-active"),i.classList.remove("latest-answer-active"),setTimeout(()=>{o.style.display="none",i.style.display="none",document.body.style.overflow="auto"},300)}
//# sourceMappingURL=commonHelpers2.js.map
