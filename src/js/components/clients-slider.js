import Swiper, { Pagination } from 'swiper';
import vars from '../_vars';

import 'swiper/scss/pagination';

Swiper.use([Pagination]);

const swiper1 = new Swiper(vars.$clientsSlider, {
  slidesPerView: 6,
  loop: true,
  autoplay: { 
    delay: 2000, 
  },
  spaceBetween: 10,
  slidesPerGroup: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 5
      },
    }
})