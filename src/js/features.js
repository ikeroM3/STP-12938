import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const featuresSwiper = document.querySelector('[data-features-swiper]');

let featuresSwiperInstance = null;

function initFeaturesSwiper() {
  if (!featuresSwiper) return;

  const isMobile = window.innerWidth < 1440;

  if (isMobile && !featuresSwiperInstance) {
    featuresSwiperInstance = new Swiper(featuresSwiper, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '[data-features-pagination]',
        clickable: true,
      },
    });
  }

  if (!isMobile && featuresSwiperInstance) {
    featuresSwiperInstance.destroy(true, true);
    featuresSwiperInstance = null;
  }
}

initFeaturesSwiper();

window.addEventListener('resize', initFeaturesSwiper);
