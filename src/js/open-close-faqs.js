const elQuestionsList = document.querySelector('.js-questions-list');

let switchClickFaqs = true;
let previousClickEl;
let previousListItem;

const clickOpenClose = event => {
  if (event.currentTarget === event.target) return;

  function clickOpenCloseFn(ancestor, elListItem) {
    ancestor.style.display = 'block';
    elListItem.classList.add('js-questions-list-item');

    switchClickFaqs = false;
    previousClickEl = ancestor;
    previousListItem = elListItem;

    iconPlus.lastElementChild.setAttribute(
      'href',
      '/img/sprite.svg#icon-minus'
    );
  }

  const elListItem = event.target.closest('.questions-list-item');
  const ancestor = elListItem.querySelector('.js-questions-container');
  const iconPlus = elListItem.querySelector('.questions-open-icon');

  if (switchClickFaqs) clickOpenCloseFn(ancestor, elListItem);
  else if (!switchClickFaqs) {
    previousClickEl.style.display = 'none';
    previousListItem.classList.remove('js-questions-list-item');

    switchClickFaqs = true;
    previousClickEl.querySelector('.questions-open-icon');

    previousClickEl
      .closest('.questions-list-item')
      .querySelector('.questions-open-icon')
      .lastElementChild.setAttribute('href', '/img/sprite.svg#icon-plus');

    if (previousClickEl !== ancestor) {
      clickOpenCloseFn(ancestor, elListItem);
    }
  }
};

elQuestionsList.addEventListener('click', clickOpenClose);
