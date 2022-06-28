import { appLang } from './script.js';

const greetingCont = document.querySelector('.greeting-container');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

export function showGreeting(appLang) {
  const currentHours = new Date().getHours();
  const arrTimeOfDayRU = [
    'Доброй ночи',
    'Доброе утро',
    'Добрый день',
    'Добрый вечер',
  ];
  const arrTimeOfDayEN = ['night', 'morning', 'day', 'evening'];
  let i = Math.floor(currentHours / 6);
  if (appLang == 'RU') {
    greeting.textContent = arrTimeOfDayRU[i] + ' ';
    name.placeholder = '[Введите имя]';
  }
  if (appLang == 'EN') {
    greeting.textContent = 'Good ' + arrTimeOfDayEN[i] + ' ';
    name.placeholder = '[Enter name]';
  }
  setTimeout(showGreeting, 60000);
}

function setLocalStorage() {
  localStorage.setItem('name', name.value);
  name.blur();
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);

name.addEventListener('change', setLocalStorage);
