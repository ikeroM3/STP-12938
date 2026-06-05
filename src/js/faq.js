import spritePath from './../img/svg/sprite.svg';
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.closest('.faq-item');
    const currentIconUse = currentItem.querySelector('.faq-icon-svg use');

    document.querySelectorAll('.faq-item').forEach(item => {
      const iconUse = item.querySelector('.faq-icon-svg use');

      if (item !== currentItem) {
        item.classList.remove('faq-item--open');
        iconUse.setAttribute('href', `${spritePath}#icon-faq-plus-circle`);
      }
    });

    currentItem.classList.toggle('faq-item--open');

    if (currentItem.classList.contains('faq-item--open')) {
      currentIconUse.setAttribute(
        'href',
        `${spritePath}#icon-faq-close-circle`
      );
    } else {
      currentIconUse.setAttribute('href', `${spritePath}#icon-faq-plus-circle`);
    }
  });
});
