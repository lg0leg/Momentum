import { appLang } from './script.js';

const weatherCont = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

export async function getWeather(appLang) {
  getLocalStorage();

  let windText;
  let humidityText;

  if (appLang == 'EN') {
    city.placeholder = '[Enter city]';
    windText = 'Wind speed';
    humidityText = 'Humidity';
  } else {
    city.placeholder = '[Введите город]';
    windText = 'Скорость ветра';
    humidityText = 'Влажность';
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${appLang}&appid=ab69f4d6782099b5c292305e694f1fbe&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.cod == '404') {
    weatherError.textContent =
      appLang == 'EN' ? 'City not found' : 'Город не найден';
  } else {
    weatherError.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    let currentTemp = Math.round(data.main.temp);
    temperature.textContent = `${currentTemp}°C`;
    weatherDescription.textContent = data.weather[0].description;

    let currentWind = Math.round(data.wind.speed);
    wind.textContent = `${windText}: ${currentWind} m/s`;

    humidity.textContent = `${humidityText}: ${data.main.humidity}%`;
    city.value = data.name;
  }

  city.blur();
}

city.addEventListener('change', setLocalStorage);
city.addEventListener('change', () => {
  getWeather(appLang);
});

function setLocalStorage() {
  localStorage.setItem('city', city.value);
}

function getLocalStorage() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
