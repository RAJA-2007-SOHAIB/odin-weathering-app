// dom.js

const domElements = {
  form: {
    self: document.querySelector('form'),
    input: document.getElementById('city'),
    btn: document.getElementById('submitBtn'),
  },
  section: {
    self: document.querySelector('section'),
    location: document.querySelector('.location'),
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
  },
  errorDiv: {
    self: document.querySelector('.error-div'),
  },
};
