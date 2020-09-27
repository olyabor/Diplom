import mainSlider from './modules/mainSlider';
import sendForm from './modules/sendForm';
import toggleMenu from './modules/toggleMenu';
import gallerySlider from './modules/gallerySlider';
import { SliderCarousel } from './modules/sliderCarousel';
import windowEvents from './modules/windowEvents';


//Слайдер вверху на главной странице
mainSlider();
// Отправка формы
sendForm();
// Открытие и закрытие выпадающего списка, модальные окна
toggleMenu();
// Галерея-слайдер
gallerySlider();
// Слайдер-карусель
const carousel = new SliderCarousel({
  main: '#services>.wrapper',
  wrap: '.services-slider',
  infinity: true,
});

carousel.init();
// Бургер-меню, скроллы
windowEvents();
