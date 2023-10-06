const swiper = new Swiper(".slider__thumbnails", {
  spaceBetween: 8,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".slider__main", {
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
   },
  thumbs: {
    swiper: swiper,
  },
});