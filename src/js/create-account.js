import $ from 'jquery';
import 'jquery-validation';

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
      alert('Form submitted successfully!');
      form.submit();
    },
  });
});
