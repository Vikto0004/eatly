const e=document.querySelector(".scroll-btn ");let o=0,s=!0;window.addEventListener("scroll",()=>{let l=window.scrollY;l<o&&s?(e.classList.add("is-active-scroll"),s=!1):l>o&&!s?(e.classList.remove("is-active-scroll"),s=!0):l===0&&e.classList.remove("is-active-scroll"),o=l<=0?0:l});e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),e.classList.remove("is-active-scroll")});
//# sourceMappingURL=scroll-up-d5f6b3dd.js.map
