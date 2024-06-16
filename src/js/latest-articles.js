'use strict';

import { latestArticlesItems } from './render-markup.js';
import { elScrollBtn } from './scroll-up.js';
import { receivingDataArticles } from './mockapi.js';

const elLatestArticlesList = document.querySelector('.latest-articles-list-js');
const elLatestArticlesBtn = document.querySelector('.latest-articles-more-js');
const elLatestBackdrop = document.querySelector('.latest-articles-backdrop-js');
const elLatestAnswer = document.querySelector('.latest-articles-answer-js');
const elLatestQuestions = document.querySelector('.latest-articles-questions');
const elLatestAnswerDate = document.querySelector('.latest-articles-date');
const elLatestAnswerBtn = document.querySelector('.latest-answer-btn-js');

let page = 1;
let limit = 3;
let totalPage = 3;
const dateArray = [];

receivingDataArticles(page, limit)
  .then(data => {
    dateArray.push(...data);
    elLatestArticlesList.innerHTML = latestArticlesItems(data);
  })
  .catch(error => console.log(error));

elLatestArticlesBtn.addEventListener('click', () => {
  elLatestArticlesBtn.classList.add('load');
  elLatestArticlesBtn.disabled = true;

  receivingDataArticles(++page, limit)
    .then(data => {
      elLatestArticlesBtn.classList.remove('load');
      elLatestArticlesBtn.disabled = false;
      elLatestArticlesList.insertAdjacentHTML(
        'beforeend',
        latestArticlesItems(data)
      );

      dateArray.push(...data);
      window.scrollBy({
        top: 400,
        behavior: 'smooth',
      });

      if (totalPage === page) {
        elLatestArticlesBtn.style.display = 'none';
      }
    })
    .catch(error => console.log(error));
});

elLatestArticlesList.addEventListener('click', e => {
  if (e.currentTarget === e.target) return;

  const elItem = e.target.closest('.latest-articles-item');
  const quest = elItem.querySelector('.latest-articles-questions').textContent;
  const { answer } = dateArray.filter(({ title }) => title === quest)[0];

  elLatestQuestions.textContent = quest;
  elLatestAnswerDate.textContent = answer;
  openAnswer();
});

elLatestAnswerBtn.addEventListener('click', closeAnswer);
elLatestBackdrop.addEventListener('click', closeAnswer);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeAnswer();
});

function openAnswer() {
  elScrollBtn.classList.remove('is-active-scroll');
  elLatestBackdrop.style.display = 'block';
  elLatestAnswer.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    elLatestBackdrop.classList.add('latest-backdrop-active');
    elLatestAnswer.classList.add('latest-answer-active');
  });
}

function closeAnswer() {
  elLatestBackdrop.classList.remove('latest-backdrop-active');
  elLatestAnswer.classList.remove('latest-answer-active');

  setTimeout(() => {
    elLatestBackdrop.style.display = 'none';
    elLatestAnswer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
}
