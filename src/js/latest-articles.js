import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { query, limit, startAfter } from 'firebase/firestore/lite';
import { latestArticlesItems } from './render-markup.js';

const elLatestArticlesList = document.querySelector('.latest-articles-list-js');
const elLatestArticlesBtn = document.querySelector('.latest-articles-more-js');
const elLatestBackdrop = document.querySelector('.latest-articles-backdrop-js');
const elLatestAnswer = document.querySelector('.latest-articles-answer-js');
const elLatestQuestions = document.querySelector('.latest-articles-questions');
const elLatestAnswerDate = document.querySelector('.latest-articles-date');
const elLatestAnswerBtn = document.querySelector('.latest-answer-btn-js');

let startIndex = 0;
let count = 3;
let nameCollection = 'latest-articles';
let totalDate = 6;

const dateArray = [];

const firebaseConfig = {
  apiKey: 'AIzaSyCR0kAmNb9OqAWbGZEA3sJGJxmVfHTI72o',
  authDomain: 'eatly-d7d44.firebaseapp.com',
  projectId: 'eatly-d7d44',
  storageBucket: 'eatly-d7d44.appspot.com',
  messagingSenderId: '804736586438',
  appId: '1:804736586438:web:a66af0c70aea356c53bdc7',
  measurementId: 'G-B5LDCNKSKB',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function promiseDataFromBeckend(db, collectionName, startIndex, count) {
  const col = collection(db, collectionName);
  let mainQuery;

  if (startIndex === 0) {
    mainQuery = query(col, limit(count));
  } else {
    const preQuery = query(col, limit(startIndex));
    const preSnapshot = await getDocs(preQuery);
    const lastVisible = preSnapshot.docs[preSnapshot.docs.length - 1];
    mainQuery = query(col, startAfter(lastVisible), limit(count));
  }

  const mainSnapshot = await getDocs(mainQuery);
  const docList = mainSnapshot.docs.map(doc => doc.data());
  return docList;
}

promiseDataFromBeckend(db, nameCollection, startIndex, count)
  .then(array => {
    elLatestArticlesList.innerHTML = latestArticlesItems(array);
    dateArray.push(...array);
  })
  .catch(error => console.log(error));

elLatestArticlesBtn.addEventListener('click', () => {
  elLatestArticlesBtn.classList.add('load');
  elLatestArticlesBtn.disabled = true;
  startIndex += count;

  promiseDataFromBeckend(db, nameCollection, startIndex, count)
    .then(array => {
      elLatestArticlesList.insertAdjacentHTML(
        'beforeend',
        latestArticlesItems(array)
      );
      dateArray.push(...array);

      elLatestArticlesBtn.classList.remove('load');
      elLatestArticlesBtn.disabled = false;
      window.scrollBy({
        top: 400,
        behavior: 'smooth',
      });

      if (totalDate === elLatestArticlesList.childElementCount) {
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
