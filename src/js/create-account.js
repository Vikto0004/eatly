import $ from 'jquery';
import 'jquery-validation';
import { receivingDataUser, savingDataUser } from './mockapi';

const elSignUpEmail = document.querySelector('.sign-up-email');

$(document).ready(function () {
  $('#sign-up-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      name: {
        required: 'Please enter your name',
        minlength: 'Your name must consist of at least 2 characters',
      },
      email: {
        required: 'Please enter your email',
        email: 'Please enter a valid email address',
      },
      password: {
        required: 'Please enter your password',
        minlength: 'Your password must be at least 6 characters long',
      },
    },
    highlight: function (element) {
      $(element).addClass('sign-input-error');
    },
    unhighlight: function (element) {
      $(element).removeClass('sign-input-error');
    },
    submitHandler: function (form) {
      const userName = form.elements.name.value;
      const userEmail = form.elements.email.value;
      const userPass = form.elements.password.value;

      checkUserInBaseData(userEmail, userName, userPass);
    },
  });
});

function checkUserInBaseData(userEmail, userName, userPass) {
  receivingDataUser()
    .then(data => {
      const res = data.find(({ email }) => email === userEmail);
      if (res) {
        const leLabel =
          '<label class="error" for="email">This email is registered</label>';
        elSignUpEmail.classList.add('sign-input-error');
        elSignUpEmail.insertAdjacentHTML('afterend', leLabel);

        elSignUpEmail.addEventListener('input', e => {
          const elLableErr = e.target.nextElementSibling;
          elLableErr.style.display = 'none';
        });
      } else {
        savingUserData(userEmail, userName, userPass);
      }
    })
    .catch(error => console.log(error));
}

async function savingUserData(userEmail, userName, userPass) {
  const userData = {
    name: userName,
    email: userEmail,
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  await savingDataUser({
    name: userName,
    email: userEmail,
    password: userPass,
  });
  window.location.href = './';
}
