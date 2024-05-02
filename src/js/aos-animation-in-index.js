import AOS from 'aos';
import 'aos/dist/aos.css';

setTimeout(() => {
  if (window.innerWidth > 768) {
    AOS.init({
      duration: 1700,
      offset: 300,
      once: true,
    });
  }
}, 100);
