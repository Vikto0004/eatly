import"./assets/header-d4894ab7.js";/* empty css                      */import{$ as t}from"./assets/vendor-2497bfba.js";import{a as m,s as u}from"./assets/mockapi-0a9f77fa.js";import"./assets/header-click-color-0ea842b7.js";const i=document.querySelector(".sign-up-email");t(document).ready(function(){t("#sign-up-form").validate({rules:{name:{required:!0,minlength:4},email:{required:!0,email:!0},password:{required:!0,minlength:6}},messages:{name:{required:"Please enter your name",minlength:"Your name must consist of at least 2 characters"},email:{required:"Please enter your email",email:"Please enter a valid email address"},password:{required:"Please enter your password",minlength:"Your password must be at least 6 characters long"}},highlight:function(e){t(e).addClass("sign-input-error")},unhighlight:function(e){t(e).removeClass("sign-input-error")},submitHandler:function(e){const s=e.elements.name.value,r=e.elements.email.value,a=e.elements.password.value;c(r,s,a)}})});function c(e,s,r){m().then(a=>{if(a.find(({email:n})=>n===e)){const n='<label class="error" for="email">This email is registered</label>';i.classList.add("sign-input-error"),i.insertAdjacentHTML("afterend",n),i.addEventListener("input",l=>{const o=l.target.nextElementSibling;o.style.display="none"})}else d(e,s,r)}).catch(a=>console.log(a))}async function d(e,s,r){const a={name:s,email:e};localStorage.setItem("userData",JSON.stringify(a)),await u({name:s,email:e,password:r}),window.location.href="./"}
//# sourceMappingURL=commonHelpers11.js.map