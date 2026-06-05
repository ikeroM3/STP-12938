import spritePath from './../img/svg/sprite.svg';
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.closest('.faq-item');
    const currentAnswer = currentItem.querySelector('.faq-answer');
    const currentIconUse = currentItem.querySelector('.faq-icon-svg use');

    document.querySelectorAll('.faq-item').forEach(item => {
      const answer = item.querySelector('.faq-answer');
      const iconUse = item.querySelector('.faq-icon-svg use');

      if (item !== currentItem) {
        item.classList.remove('faq-item--open');
        answer.style.maxHeight = '0px';
        iconUse.setAttribute('href', `${spritePath}#icon-faq-plus-circle`);
      }
    });

    currentItem.classList.toggle('faq-item--open');

    if (currentItem.classList.contains('faq-item--open')) {
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
      currentIconUse.setAttribute(
        'href',
        `${spritePath}#icon-faq-close-circle`
      );
    } else {
      currentAnswer.style.maxHeight = '0px';
      currentIconUse.setAttribute('href', `${spritePath}#icon-faq-plus-circle`);
    }
  });
});
