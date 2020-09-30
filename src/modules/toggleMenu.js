import handlerMenu from './handlerMenu';

const toggleMenu = () => {
  const elemBody = document.querySelector('body'),
    freeVisitForm = document.getElementById('free_visit_form'),
    callbackForm = document.getElementById('callback_form');

elemBody.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.club-select') && !target.closest('ul')) {
    handlerMenu(target.closest('.club-select').querySelector('ul'));
  }
  if (target.closest('.open-popup')) {
    handlerMenu(freeVisitForm);
  }
  if (target.matches('.callback-btn') && !target.closest('#footer_form')) {
    handlerMenu(callbackForm);
  }
  if (
    target.matches('.close-btn') ||
    target.closest('.close-form') ||
    target.closest('.overlay') ||
    target.matches('.close_icon')
  ) {
    elemBody.querySelectorAll('.active').forEach((item) => handlerMenu(item));
  } 
  if (target.closest('.fixed-gift')) {
    elemBody.querySelector('.fixed-gift').style.display = 'none';
    handlerMenu(document.getElementById('gift'));
  }
});
};

export default toggleMenu;
