// src/index.js
import './styles.css';
import { fetchWeather } from './api.js';
import { WeatherData } from './weatherData.js';
import { renderWeather } from './dom.js';

const myF = async function (city) {
  const weather = await fetchWeather(city);
  const data = new WeatherData(weather);
  renderWeather(data.getDisplayData('C'));
};

myF('Lahore');
