import $ from 'jquery';
import 'jquery-validation';
import { receivingDataUser, savingDataUser } from './mockapi';

const elSignUpEmail = document.querySelector('.sign-up-email');

$(document).ready(function () {
  $('#sign-in-form').validate({
    rules: {
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
      const userEmail = form.elements.email.value;
      const userPass = form.elements.password.value;

      checkUserInBaseData(userEmail, userPass);
    },
  });
});

function checkUserInBaseData(userEmail, userPass) {
  receivingDataUser()
    .then(data => {
      console.log(data);
      const res = data.find(({ email, password }) => {
        return email === userEmail && password === userPass;
      });

      if (!res) {
        const leLabel =
          '<label class="error" for="email">Wrong email or password</label>';
        elSignUpEmail.classList.add('sign-input-error');
        elSignUpEmail.insertAdjacentHTML('afterend', leLabel);

        elSignUpEmail.addEventListener('input', e => {
          const elLableErr = e.target.nextElementSibling;
          elLableErr.style.display = 'none';
        });
      } else {
        savingUserData(userEmail, res.name);
      }
    })
    .catch(error => console.log(error));
}

function savingUserData(userEmail, userName) {
  const userData = {
    name: userName,
    email: userEmail,
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  window.location.href = './';
}
