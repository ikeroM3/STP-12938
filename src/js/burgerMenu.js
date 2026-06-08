import spritePath from './../img/svg/sprite.svg';

const burgerBtn = document.querySelector('[data-burger="button"]');
const burgerOverlay = document.querySelector('[data-burger="overlay"]');
const burgerLinks = document.querySelectorAll('[data-burger="link"]');

function openMenu() {
  burgerOverlay.dataset.visible = 'open';
  burgerBtn.dataset.state = 'open';
}

function closeMenu() {
  burgerOverlay.dataset.visible = 'close';
  burgerBtn.dataset.state = 'close';
}

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.dataset.state === 'open') {
    closeMenu();
  } else {
    openMenu();
  }
});

burgerLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
