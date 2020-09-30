import mainSlider from './modules/mainSlider';
import sendForm from './modules/sendForm';
import toggleMenu from './modules/toggleMenu';
import handlerInput from './modules/handlerInput';
import gallerySlider from './modules/gallerySlider';
import { SliderCarousel } from './modules/sliderCarousel';
import windowEvents from './modules/windowEvents';


//Слайдер вверху на главной странице
mainSlider();
// Отправка формы
sendForm();
// Открытие и закрытие выпадающего списка, модальные окна
toggleMenu();
// Ввод имени  только на русском языке, телефон от 7 до 13 цифр и знак +
handlerInput();
// Галерея-слайдер
gallerySlider();
// Слайдер-карусель
const carousel = new SliderCarousel({
  main: '#services>.wrapper',
  wrap: '.services-slider',
  infinity: true,

  responsive: [
    {
      breakpoint: 1200,
      slidesToShow: 4,
    },
    {
      breakpoint: 1024,
      slidesToShow: 3,
    },
    {
      breakpoint: 768,
      slidesToShow: 2,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
    },
  ],
});

carousel.init();
// Бургер-меню, скроллы
windowEvents();