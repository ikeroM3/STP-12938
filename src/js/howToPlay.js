import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

new Swiper('#how-to-play-swiper', {
  modules: [FreeMode],
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  slidesOffsetAfter: 20,
  breakpoints: {
    1440: {
      enabled: false,
    },
  },
});
