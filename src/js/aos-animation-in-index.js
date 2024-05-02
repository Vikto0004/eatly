import AOS from 'aos';
import 'aos/dist/aos.css';

setTimeout(() => {
  AOS.init({
    disable: 'mobile',
    duration: 1700,
    offset: 300,
    once: true,
  });
}, 100);
