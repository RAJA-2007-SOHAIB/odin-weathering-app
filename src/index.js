// src/index.js
import './styles.css';
import { fetchWeather } from './api.js';
import { WeatherData } from './weatherData.js';
import { renderWeather, domElements } from './dom.js';

import humidityImg from './images/humidity.webp';
import windImg from './images/wind.webp';
import feelsLikeImg from './images/feelsLike.png';

domElements.section.moreInfo.humidity.img.src = humidityImg;
domElements.section.moreInfo.wind.img.src = windImg;
domElements.section.moreInfo.feelsLike.img.src = feelsLikeImg;

let currentUnit = 'c';
let currentWeatherData = null;

const DisplayCityWeather = async function (city) {
  try {
    const weather = await fetchWeather(city);
    currentWeatherData = new WeatherData(weather);
    renderWeather(currentWeatherData.getDisplayData(currentUnit));
    domElements.errorDiv.self.textContent = '';
  } catch (error) {
    domElements.errorDiv.self.textContent = error.message;
  }
};

DisplayCityWeather('Lahore');

const form = domElements.form.self;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = domElements.form.input.value;
  if (city) {
    DisplayCityWeather(city);
  }
  domElements.form.input.value = '';
  console.log(currentWeatherData);
});

const toggleButton = domElements.section.unitToggle;
toggleButton.addEventListener('click', () => {
  if (currentUnit.toLocaleLowerCase() === 'c') {
    if (currentWeatherData) {
      currentUnit = 'f';
      renderWeather(currentWeatherData.getDisplayData(currentUnit));
      toggleButton.textContent = 'Display °C';
    }
  } else if (currentUnit.toLocaleLowerCase() === 'f') {
    if (currentWeatherData) {
      currentUnit = 'c';
      renderWeather(currentWeatherData.getDisplayData(currentUnit));
      toggleButton.textContent = 'Display °F';
    }
  }
});
