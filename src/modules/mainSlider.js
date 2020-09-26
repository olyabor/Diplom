'use strict';
const mainSlider = () => {
  const mainSlider = document.querySelector('.main-slider'),
    slide = mainSlider.querySelectorAll('.slide');
  let currentSlide = 0,
    interval;

  const autoPlaySlide = () => {
    slide[currentSlide].style.display = 'none';
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    slide[currentSlide].style = '';
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  mainSlider.addEventListener('mouseover', (event) => {
    if (event.target.closest('.main-slider')) {
      stopSlide();
    }
  });

  mainSlider.addEventListener('mouseout', (event) => {
    if (event.target.closest('.main-slider')) {
      startSlide();
    }
  });

  startSlide(1500);
};

export default mainSlider;