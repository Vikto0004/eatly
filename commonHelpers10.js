import"./assets/header-a472c3f4.js";/* empty css                      */import{$ as s}from"./assets/vendor-2497bfba.js";import{a as u}from"./assets/mockapi-0a9f77fa.js";import"./assets/header-click-color-0ea842b7.js";const i=document.querySelector(".sign-up-email");s(document).ready(function(){s("#sign-in-form").validate({rules:{email:{required:!0,email:!0},password:{required:!0,minlength:6}},messages:{email:{required:"Please enter your email",email:"Please enter a valid email address"},password:{required:"Please enter your password",minlength:"Your password must be at least 6 characters long"}},highlight:function(e){s(e).addClass("sign-input-error")},unhighlight:function(e){s(e).removeClass("sign-input-error")},submitHandler:function(e){const a=e.elements.email.value,r=e.elements.password.value;m(a,r)}})});function m(e,a){u().then(r=>{console.log(r);const l=r.find(({email:n,password:t})=>n===e&&t===a);if(l)c(e,l.name);else{const n='<label class="error" for="email">Wrong email or password</label>';i.classList.add("sign-input-error"),i.insertAdjacentHTML("afterend",n),i.addEventListener("input",t=>{const o=t.target.nextElementSibling;o.style.display="none"})}}).catch(r=>console.log(r))}function c(e,a){const r={name:a,email:e};localStorage.setItem("userData",JSON.stringify(r)),window.location.href="./"}
//# sourceMappingURL=commonHelpers10.js.map