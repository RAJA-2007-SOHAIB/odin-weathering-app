// dom.js

const domElements = {
  form: {
    self: document.querySelector('form'),
    input: document.getElementById('city'),
    btn: document.getElementById('submitBtn'),
  },
  section: {
    self: document.querySelector('section'),
    unitToggle: document.getElementById('unitToggle'),
    location: document.querySelector('.location'),
    dateAndTime: document.querySelector('.date-time'),
    icon: document.querySelector('.icon'),
    temp: document.querySelector('.temp'),
    conditionText: document.querySelector('.condition-text'),
    moreInfo: {
      self: document.querySelector('.more-info'),
      humidity: {
        self: document.querySelector('.humidity'),
        img: document.querySelector('.humIMG'),
        val: document.querySelector('.hum'),
      },
      wind: {
        self: document.querySelector('.wind'),
        img: document.querySelector('.windIMG'),
        val: document.querySelector('.wnd'),
      },
      feelsLike: {
        self: document.querySelector('.feels-like'),
        img: document.querySelector('.feelsIMG'),
        val: document.querySelector('.feels-temp'),
      },
    },
    willItRain: document.querySelector('.will-it-rain'),
  },
  errorDiv: {
    self: document.querySelector('.error-div'),
  },
};

const renderWeather = function (getDisplayData) {
  const section = domElements.section;

  section.location.textContent = getDisplayData.location;
  section.icon.src = getDisplayData.conditionIcon;
  section.temp.textContent = getDisplayData.temp;
  section.conditionText.textContent = getDisplayData.conditionText;
  section.dateAndTime.textContent = getDisplayData.dateAndTime;

  const moreInfo = section.moreInfo;
  const humidity = moreInfo.humidity;
  const wind = moreInfo.wind;
  const feelsLike = moreInfo.feelsLike;

  humidity.val.textContent = getDisplayData.humidity;

  wind.val.textContent = getDisplayData.windSpeed;

  feelsLike.val.textContent = getDisplayData.feelsLike;

  section.willItRain.textContent = getDisplayData.willRain;
};

export { renderWeather, domElements };
