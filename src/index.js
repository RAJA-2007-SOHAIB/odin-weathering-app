// src/index.js
import './styles.css';
import { fetchWeather } from './api.js';
import { WeatherData } from './weatherData.js';

const myF = async function (city) {
  const weather = await fetchWeather(city);
  const data = new WeatherData(weather);
  const details = data.getDisplayData('C');
  console.log(details);
};

myF('Lahore');
