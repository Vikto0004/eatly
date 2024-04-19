const secondSwiper = new Swiper('.secondSwiper', {
  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,
  direction: 'horizontal',
  draggable: true,
  speed: 1000,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: { el: '.swiper-scrollbar', hide: false },
});
