import Swiper, { Navigation } from 'swiper';
import vars from '../_vars';

import 'swiper/scss/navigation';

Swiper.use([Navigation]);

const swiper2 = new Swiper(vars.$testimonalsSlider, {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  autoplay: {
      delay: 2000,
    },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})