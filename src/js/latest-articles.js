import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

async function getCities(db) {
  const citiesCol = collection(db, 'latest-articles');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

console.log(getCities(db));
