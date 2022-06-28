import { appLang } from './script.js';

const quoteCont = document.querySelector('.quote-container');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let urlQuuote;

export async function getQuotes(appLang) {
  urlQuuote = `./js/quote${appLang}.json`;
  const res = await fetch(urlQuuote);
  const data = await res.json();

  let i = Math.floor(Math.random() * data.length);
  quote.textContent = `"${data[i].quote}"`;
  author.textContent = data[i].author;
}

changeQuote.addEventListener('click', () => {
  getQuotes(appLang);
});
