import { showGreeting } from './greeting.js';
import { showDate, showTime } from './ClockAndCalendar.js';
import { getWeather } from './weather.js';
import { getQuotes } from './quotes.js';

let appLang;

const appSettings = document.querySelector('.app-settings');
const iconAppSettings = document.querySelector('.icon-app-settings');
const switchBtn = document.querySelector('.lang-app-switch-btn');

const langAppRus = document.querySelector('.lang-app-text-1');
const langAppEN = document.querySelector('.lang-app-text-2');
const textVisibilityTitle = document.querySelector('#visibility-title');
const textTimeSett = document.querySelector('#settings-time-text');
const textDateSett = document.querySelector('#settings-date-text');
const textGreetingsSett = document.querySelector('#settings-greetings-text');
const textQuotesSett = document.querySelector('#settings-quotes-text');
const textWeatherSett = document.querySelector('#settings-weather-text');
const textPlayerSett = document.querySelector('#settings-player-text');

const blockVisibility = document.querySelector('.block-visibility');
const sliderTime = document.querySelector('#slider-time');
const sliderDate = document.querySelector('#slider-date');
const sliderGreetings = document.querySelector('#slider-greetings');
const sliderQuotes = document.querySelector('#slider-quotes');
const sliderWeather = document.querySelector('#slider-weather');
const sliderAudioPlayer = document.querySelector('#slider-audio-player');

let sliderTimeCond = 'on';
let sliderDateCond = 'on';
let sliderGreetingsCond = 'on';
let sliderQuotesCond = 'on';
let sliderWeatherCond = 'on';
let sliderAudioPlayerCond = 'on';

//стартовая установка языка и контента

function setAppLang() {
  if (localStorage.getItem('appLang')) {
    appLang = localStorage.getItem('appLang');
  } else {
    appLang = 'EN';
    setLocalStorage();
  }
  toggleIconLang(appLang);
}

function startApp() {
  showGreeting(appLang);
  showTime(appLang);
  getWeather(appLang);
  getQuotes(appLang);
  toggleSettingslang(appLang);
  toggleSliderIcon();
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);

setAppLang();
startApp();

//изменение языка и перезапуск функций

switchBtn.addEventListener('click', () => {
  if (appLang == 'EN') {
    appLang = 'RU';
  } else {
    appLang = 'EN';
  }
  toggleIconLang(appLang);
  switchAppLang(appLang);
});

function switchAppLang(appLang) {
  showGreeting(appLang);
  showDate(appLang);
  getWeather(appLang);
  getQuotes(appLang);
  toggleSettingslang(appLang);
}

//изменение иконок

function toggleIconLang(appLang) {
  if (appLang == 'EN') {
    switchBtn.classList.add('switch-on');
  } else {
    switchBtn.classList.remove('switch-on');
  }
}

function toggleVisibilitySettings() {
  appSettings.classList.toggle('visible-settings');
  appSettings.classList.toggle('unvisible-settings');
}

//перевод самого окна настроек

function toggleSettingslang(appLang) {
  if (appLang == 'EN') {
    langAppRus.textContent = 'Ru';
    langAppEN.textContent = 'Eng';
    textVisibilityTitle.textContent = 'Select blocks:';
    textTimeSett.textContent = 'Time';
    textDateSett.textContent = 'Date';
    textGreetingsSett.textContent = 'Greetings';
    textQuotesSett.textContent = 'Quotes';
    textWeatherSett.textContent = 'Weather';
    textPlayerSett.textContent = 'Audio Player';
  } else {
    langAppRus.textContent = 'Рус';
    langAppEN.textContent = 'Англ';
    textVisibilityTitle.textContent = 'Выберите блоки:';
    textTimeSett.textContent = 'Время';
    textDateSett.textContent = 'Дата';
    textGreetingsSett.textContent = 'Приветствие';
    textQuotesSett.textContent = 'Цитаты';
    textWeatherSett.textContent = 'Погода';
    textPlayerSett.textContent = 'Аудиоплеер';
  }
}

//переключение видимости блоков

iconAppSettings.addEventListener('click', toggleVisibilitySettings);

switchBtn.addEventListener('click', setLocalStorage);

sliderTime.addEventListener('click', () => {
  if (sliderTimeCond == 'on') {
    sliderTimeCond = 'off';
  } else {
    sliderTimeCond = 'on';
  }
  setLocalStorage();
  toggleSliderIcon();
});

sliderDate.addEventListener('click', () => {
  if (sliderDateCond == 'on') {
    sliderDateCond = 'off';
  } else {
    sliderDateCond = 'on';
  }
  setLocalStorage();
  toggleSliderIcon();
});

sliderGreetings.addEventListener('click', () => {
  if (sliderGreetingsCond == 'on') {
    sliderGreetingsCond = 'off';
  } else {
    sliderGreetingsCond = 'on';
  }
  setLocalStorage();
  toggleSliderIcon();
});

sliderQuotes.addEventListener('click', () => {
  if (sliderQuotesCond == 'on') {
    sliderQuotesCond = 'off';
  } else {
    sliderQuotesCond = 'on';
  }
  setLocalStorage();
  toggleSliderIcon();
});

sliderWeather.addEventListener('click', () => {
  if (sliderWeatherCond == 'on') {
    sliderWeatherCond = 'off';
  } else {
    sliderWeatherCond = 'on';
  }
  setLocalStorage();
  toggleSliderIcon();
});

sliderAudioPlayer.addEventListener('click', () => {
  if (sliderAudioPlayerCond == 'on') {
    sliderAudioPlayerCond = 'off';
  } else {
    sliderAudioPlayerCond = 'on';
  }
  setLocalStorage();
  toggleSliderIcon();
});

/*обновление ползунков в меню*/

function toggleSliderIcon() {
  getLocalStorage();
  if (sliderTimeCond == 'on') {
    sliderTime.classList.add('switch-on-vis');
    document.querySelector('.time').classList.remove('unvisible-block');
  } else {
    sliderTime.classList.remove('switch-on-vis');
    document.querySelector('.time').classList.add('unvisible-block');
  }

  if (sliderDateCond == 'on') {
    sliderDate.classList.add('switch-on-vis');
    document.querySelector('.date').classList.remove('unvisible-block');
  } else {
    sliderDate.classList.remove('switch-on-vis');
    document.querySelector('.date').classList.add('unvisible-block');
  }

  if (sliderGreetingsCond == 'on') {
    sliderGreetings.classList.add('switch-on-vis');
    document
      .querySelector('.greeting-container')
      .classList.remove('unvisible-block');
  } else {
    sliderGreetings.classList.remove('switch-on-vis');
    document
      .querySelector('.greeting-container')
      .classList.add('unvisible-block');
  }

  if (sliderQuotesCond == 'on') {
    sliderQuotes.classList.add('switch-on-vis');
    document
      .querySelector('.quote-container')
      .classList.remove('unvisible-quotes');
  } else {
    sliderQuotes.classList.remove('switch-on-vis');
    document
      .querySelector('.quote-container')
      .classList.add('unvisible-quotes');
  }

  if (sliderWeatherCond == 'on') {
    sliderWeather.classList.add('switch-on-vis');
    document.querySelector('.weather').classList.remove('unvisible-block');
  } else {
    sliderWeather.classList.remove('switch-on-vis');
    document.querySelector('.weather').classList.add('unvisible-block');
  }

  if (sliderAudioPlayerCond == 'on') {
    sliderAudioPlayer.classList.add('switch-on-vis');
    document.querySelector('.player').classList.remove('unvisible-block');
  } else {
    sliderAudioPlayer.classList.remove('switch-on-vis');
    document.querySelector('.player').classList.add('unvisible-block');
  }
}

/*ls*/

function setLocalStorage() {
  localStorage.setItem('appLang', appLang);
  localStorage.setItem('sliderTimeCond', sliderTimeCond);
  localStorage.setItem('sliderDateCond', sliderDateCond);
  localStorage.setItem('sliderGreetingsCond', sliderGreetingsCond);
  localStorage.setItem('sliderQuotesCond', sliderQuotesCond);
  localStorage.setItem('sliderWeatherCond', sliderWeatherCond);
  localStorage.setItem('sliderAudioPlayerCond', sliderAudioPlayerCond);
}

function getLocalStorage() {
  if (localStorage.getItem('appLang')) {
    appLang = localStorage.getItem('appLang');
  }
  if (localStorage.getItem('sliderTimeCond')) {
    sliderTimeCond = localStorage.getItem('sliderTimeCond');
  }
  if (localStorage.getItem('sliderDateCond')) {
    sliderDateCond = localStorage.getItem('sliderDateCond');
  }
  if (localStorage.getItem('sliderGreetingsCond')) {
    sliderGreetingsCond = localStorage.getItem('sliderGreetingsCond');
  }
  if (localStorage.getItem('sliderQuotesCond')) {
    sliderQuotesCond = localStorage.getItem('sliderQuotesCond');
  }
  if (localStorage.getItem('sliderWeatherCond')) {
    sliderWeatherCond = localStorage.getItem('sliderWeatherCond');
  }
  if (localStorage.getItem('sliderAudioPlayerCond')) {
    sliderAudioPlayerCond = localStorage.getItem('sliderAudioPlayerCond');
  }
}

export { appLang };
