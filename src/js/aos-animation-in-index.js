import AOS from 'aos';
import 'aos/dist/aos.css';

const elHeader = document.querySelector('.header');
elHeader.classList.add('js-header-animation');

setTimeout(() => {
  AOS.init({
    duration: 1700,
    offset: 300,
  });
}, 100);
