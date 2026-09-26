// api.js

async function fetchWeather(city) {
  const url =
    'https://api.weatherapi.com/v1/current.json?key=0a1315769c544213a5a151300262509&q=';
  const response = await fetch(url + city);
  if (!response.ok) {
    throw new Error('City not found.');
  }
  const responseJson = await response.json();
  return responseJson;
}

export { fetchWeather };
