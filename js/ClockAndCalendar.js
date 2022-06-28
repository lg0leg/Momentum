import { appLang } from './script.js';

const time = document.querySelector('.time');
const date = document.querySelector('.date');

export function showTime() {
  time.textContent = new Date().toLocaleTimeString();
  showDate(appLang);
  setTimeout(showTime, 1000);
}

export function showDate(appLang) {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  if (appLang == 'EN') {
    date.textContent = new Date().toLocaleDateString('en-US', options);
  } else {
    date.textContent = new Date().toLocaleDateString('ru-RU', options);
  }
}
