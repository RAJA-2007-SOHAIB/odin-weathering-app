// weatherData.js

const WeatherData = class {
  constructor(responseJson) {
    this.location = responseJson.location;
    this.current = responseJson.current;

    this.chancesOfRain = responseJson.current.chance_of_rain;
    this.chancesOfSnow = responseJson.current.chance_of_snow;
    this.cloud = responseJson.current.cloud;
    this.feelsLikeC = responseJson.current.feelslike_c;
    this.feelsLikeF = responseJson.current.feelslike_f;
    this.temC = responseJson.current.temp_c;
    this.tempF = responseJson.current.temp_f;
    this.windSpeed = responseJson.current.wind_kph;
    this.humidity = responseJson.current.humidity;
    this.willItRain = responseJson.current.will_it_rain;
    this.willItSnow = responseJson.current.will_it_snow;

    this.condition = responseJson.current.condition;
    this.conditionText = responseJson.current.condition.text;
    this.conditionIcon = responseJson.current.condition.icon;
  }
  tempGetter(type) {
    if (type === 'c' || type === 'C') {
      const temperature = {
        feelsLike: `${this.feelsLikeC}°C`,
        temp: `${this.temC}°C`,
      };
      return temperature;
    }
    const temperature = {
      feelsLike: `${this.feelsLikeF}°F`,
      temp: `${this.tempF}°F`,
    };
    return temperature;
  }

  getLocation() {
    const location = {
      name: this.location.name,
      country: this.location.country,
      region: this.location.region,
    };
    if (location.region) {
      return `${location.name}, ${location.region}, ${location.country}`;
    }
    return `${location.name}, ${location.country}`;
  }

  getTime() {
    const localTime = this.location.localtime;

    const dateObj = new Date(localTime.replace(' ', 'T'));

    const options = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(dateObj);
  }

  getDisplayData(type) {
    const location = this.getLocation();
    const dateAndTime = this.getTime();
    const conditionText = `${this.conditionText}`;
    const conditionIcon = `https:${this.conditionIcon}`;
    const humidity = `${this.humidity} %`;
    const windSpeed = `${this.windSpeed} km/h`;
    const cloudCover = `${this.cloud} %`;

    const tempData = this.tempGetter(type);
    const feelsLike = `Feels like ${tempData.feelsLike}`;
    const temp = `${tempData.temp}`;

    return {
      location,
      dateAndTime,
      conditionText,
      conditionIcon,
      humidity,
      windSpeed,
      cloudCover,
      feelsLike,
      temp,
    };
  }
};

export { WeatherData };
