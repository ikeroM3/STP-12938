import spritePath from './../img/svg/sprite.svg';

const faqItems = document.querySelectorAll('[data-faq-item]');
const faqButtons = document.querySelectorAll('[data-faq-button]');

faqItems.forEach(item => {
  const answer = item.querySelector('[data-faq-answer]');

  if (item.dataset.open === 'true') {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  } else {
    answer.style.maxHeight = '0px';
  }
});

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.closest('[data-faq-item]');
    const currentAnswer = currentItem.querySelector('[data-faq-answer]');
    const currentIconUse = currentItem.querySelector('[data-faq-icon]');
    const isOpen = currentItem.dataset.open === 'true';

    faqItems.forEach(item => {
      const answer = item.querySelector('[data-faq-answer]');
      const iconUse = item.querySelector('[data-faq-icon]');

      item.dataset.open = 'false';
      answer.style.maxHeight = '0px';
      iconUse.setAttribute('href', `${spritePath}#icon-faq-plus-circle`);
    });

    if (!isOpen) {
      currentItem.dataset.open = 'true';
      currentAnswer.style.maxHeight = `${currentAnswer.scrollHeight}px`;
      currentIconUse.setAttribute(
        'href',
        `${spritePath}#icon-faq-close-circle`
      );
    }
  });
});
