const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 135,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  on: {
    slideChange: function () {
      // Знаходимо активний слайд
      const activeSlide = this.slides[this.activeIndex];

      // Знаходимо всі слайди
      const allSlides = this.slides;

      // Перебираємо всі слайди
      allSlides.forEach(slide => {
        if (slide === activeSlide) {
          // Додаємо клас для активного слайду
          slide.classList.add('active-slide');
        } else {
          // Видаляємо клас для неактивних слайдів
          slide.classList.remove('active-slide');
        }
      });
    },
  },
});
