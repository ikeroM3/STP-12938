import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const featuresSwiper = document.querySelector('[data-features-swiper]');

if (featuresSwiper) {
  new Swiper(featuresSwiper, {
    modules: [Pagination],

    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: '[data-features-pagination]',
      clickable: true,
    },
  });
}
