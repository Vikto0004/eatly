(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=document.querySelector(".js-header-menu-close"),m=document.querySelector(".js-header-menu-open"),l=document.querySelector(".js-header-menu-wrap"),y=document.querySelectorAll(".js-header-guide");function p(r){const o=document.querySelectorAll(".js-list-login"),c=document.querySelectorAll(".js-header-user-wrap"),n=document.querySelectorAll(".js-header-user-text");o.forEach(e=>e.classList.add("list-login-act")),c.forEach(e=>e.classList.add("header-user-active")),n.forEach(e=>e.textContent=r)}const h=JSON.parse(localStorage.getItem("userData"));p(h.name);const g=()=>{document.body.style.overflow="hidden",l.style.display="flex",setTimeout(()=>{l.style.transform="translateX(0%)"},100)};m.addEventListener("click",g);const L=()=>{l.style.transform="translateX(100%)",document.body.style.overflow="auto",setTimeout(()=>{l.style.display="none"},700)};f.addEventListener("click",L);const a=document.location.href.split("/"),s=a[a.length-1],S=document.querySelector("#openBasket");for(const r of y)r.getAttribute("href")===`./${s}`&&(r.style.color="#6C5FBC");(s==="index.html"||s==="menu.html"||s==="result-search.html"||s==="")&&(S.style.display="block");const i=document.querySelector(".header"),u=document.querySelector(".js-header-box");window.addEventListener("scroll",()=>{window.scrollY>40?(i.classList.add("js-header"),u.style.padding="10px 0"):(i.classList.remove("js-header"),u.style.padding="40px 0")});document.body.addEventListener("dblclick",r=>r.preventDefault());
//# sourceMappingURL=header-31341d69.js.map
