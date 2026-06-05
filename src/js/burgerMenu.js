import spritePath from './../img/svg/sprite.svg';

const burgerBtn = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.burger-overlay');
const burgerUse = document.querySelector('.burger-icon use');

burgerBtn.addEventListener('click', () => {
  const isOpen = burgerOverlay.dataset.visible === 'open';

  if (isOpen) {
    burgerOverlay.dataset.visible = 'close';
    burgerUse.setAttribute('href', `${spritePath}#icon-burger`);
    burgerBtn.classList.remove('is-open');
  } else {
    burgerOverlay.dataset.visible = 'open';
    burgerUse.setAttribute('href', `${spritePath}#icon-close`);
    burgerBtn.classList.add('is-open');
  }
});
