const gallerySlider = () => {
  const gallerySlider = document.querySelector('.gallery-slider'),
    slide = gallerySlider.querySelectorAll('.slide');
  let currentSlide = 0,
    interval;

  document
    .querySelector('.gallery-bg .wrapper')
    .insertAdjacentHTML(
      'afterbegin',
      `<i class="fa fa-angle-left arrow-left"></i>`
    );
  document
    .querySelector('.gallery-bg .wrapper')
    .insertAdjacentHTML(
      'beforeend',
      `<i class="fa fa-angle-right arrow-right"></i>`
    );
  for (let i = 0; i < slide.length; i++) {
    document
      .querySelector('.gallery-bg .wrapper')
      .insertAdjacentHTML('beforeend', `<button class="slider-dot"></button>`);
  }
  let style = document.getElementById('slider-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'slider-style';
  }
  style.textContent = `
  .gallery-bg {
    display: flex !important;
    overflow: hidden;
    margin-top: 70px;
  }
  .gallery-bg .wrapper{
    display: flex !important;
    align-items: center !important;
    transform: translateX(50px);
  }
  .slide {
    display: none;
    flex 0 0 auto;
  }
  .active-slide {
    display: flex !important;
    justify-content: center !important;
    animation-duration: 2s;
  }
  .slider-dot {
    width: 20px !important;
    height: 5px !important;
    position: relative !important;
    left: -50%;
    top: 40%;
    margin-left: 5px;
    z-index: 99;
    justify-content: center;
    border: 1px solid #A0C6C1;
    box-shadow: 0px 2px 12px rgba(173, 152, 143, .25);
    border-radius: 25%;
  }
  .active-dot {
    background-color: rgba(161, 16, 89, .5);
  }
  .arrow-left, .arrow-right {
    min-width: 50px !important;
    height: 50px !important;
    line-height: 50px;
    font-size: 30px;
    background-color: #E9F41A;
    color: #A10659;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 2px 12px rgba(173, 152, 143, 0.25);
  }
  .arrow-left:hover,
  .arrow-right:hover,
  .arrow-left:focus,
  .arrow-right:focus{
    background-color: #E9F41A;
    opacity: .5;
    outline: transparent;
  }`;
  document.head.append(style);

  slide[currentSlide].classList.add('.active-slide');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const sliderDots = document.querySelectorAll('.slider-dot');

  const autoPlaySlide = (direction = 'right') => {
    slide[currentSlide].classList.remove('active-slide');
    sliderDots[currentSlide].classList.remove('active-dot');
    if (direction === 'left') {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
    } else {
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
    }
    slide[currentSlide].classList.add('active-slide');
    sliderDots[currentSlide].classList.add('active-dot');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  gallerySlider.addEventListener('mouseover', (event) => {
    if (event.target.closest('.gallery-slider')) {
      stopSlide();
    }
  });

  gallerySlider.addEventListener('mouseout', (event) => {
    if (event.target.closest('.gallery-slider')) {
      startSlide();
    }
  });

  arrowLeft.addEventListener('click', () => {
    autoPlaySlide('left');
  });
  arrowRight.addEventListener('click', () => {
    autoPlaySlide('right');
  });
  sliderDots.forEach((item, index) => {
    item.addEventListener('click', () => {
      slide[currentSlide].classList.remove('active-slide');
      sliderDots[currentSlide].classList.remove('active-dot');
      currentSlide = index;
      slide[index].classList.add('active-slide');
      item.classList.add('active-dot');
    });
  });

  startSlide(1500);
};

export default gallerySlider;