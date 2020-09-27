class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 5,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.warn(
        'slider-carousel: Необходимо два свойства, "main" и "wrap"!'
      );
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }

    if (this.responsive) {
      this.responseInit();
    }
  }
  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }
      .glo-slider__wrap {
        display: flex !important;
        align-items: center;
        transition: transform .5s !important;
        will-change: transform !important;
      }
      .glo-slider__item {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center;
        
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: 0 auto !important;
      }
    `;
    document.head.append(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  nextSlider() {
    if (
      this.options.infinity ||
      this.options.position < this.options.maxPosition
    ) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  addArrow() {
    this.prev = document.createElement('div');
    this.next = document.createElement('div');
    this.prev.className = 'fa fa-angle-left arrow-left';
    this.next.className = 'fa fa-angle-right arrow-right';
    this.main.append(this.prev);
    this.main.append(this.next);
    const style = document.createElement('style');
    style.textContent = `
      #services .arrow-left,
      #services .arrow-right {
        min-width: 50px !important;
        line-height: 50px !important;
        position: absolute;
        transform: translateY(${- Math.round(this.wrap.clientHeight * 0.5)}px);
        z-index: 99;     
        color: #9400D3;
        font-size: 30px;
        text-align: center !important;
        border-radius: 50%;
        box-shadow: 0px 2px 12px rgba(173, 152, 143, .25);
      }
      .arrow-left{
        left: 0;
      }
      .arrow-right{
        right: 0;
      }
      .arrow-left:hover,
      .arrow-right:hover,
      .arrow-left:focus,
      .arrow-right:focus{
        background-color: #E9F41A;
        opacity: .5;
        outline: transparent;
      }
    `;
    document.head.append(style);
  }
  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map((item) => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };

    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}

export {SliderCarousel};