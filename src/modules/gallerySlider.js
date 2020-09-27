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
  let style = document.getElementById('slider-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'slider-style';
  }
  style.textContent = `
    .gallery-bg {
    display: flex;
    overflow: hidden;
    margin-top: 70px;
  }

  .gallery-bg .wrapper{
    display: flex;
    align-items: center;
  }

  .slide {
    display: none;
    height: 404px;
  }

  .active-slide {
    display: flex;
    justify-content: center;
    animation-duration: 2s;
  }

  .arrow-left, .arrow-right {
        width: 50px;
        line-height: 50px;
        color: #FF7236;
        font-size: 30px;
        text-align: center;
        border-radius: 50%;
        box-shadow: 0px 2px 12px rgba(173, 152, 143, 0.25);
  }`;
  document.head.append(style);

  slide[currentSlide].classList.add('.active-slide');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  const autoPlaySlide = (direction = 'right') => {
    slide[currentSlide].classList.remove('active-slide');
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

  startSlide(1500);
};

export default gallerySlider;