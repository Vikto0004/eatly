const d=document.querySelector(".your-section-js"),a=document.querySelector(".divider-money"),l=document.querySelector(".divider-wallet");let i=!0;const m=()=>{const r=document.querySelector(".js-purchases-one-number"),s=document.querySelector(".js-purchases-two-number");let e=0;function n(){e+=20.4,r.textContent="$"+e.toFixed(2),e<410&&setTimeout(n,200)}let t=0;function o(){t+=2.4,s.textContent="$"+t.toFixed(2),t<45&&setTimeout(o,200)}const u=d.getBoundingClientRect().top,c=window.innerHeight;u<c/2&&i&&(i=!1,a.style.animation="dividerMoney 4s linear forwards",l.style.animation="dividerWallet 4s linear forwards",n(),o())};window.addEventListener("scroll",m);
//# sourceMappingURL=purchases-animation-98c64302.js.map
