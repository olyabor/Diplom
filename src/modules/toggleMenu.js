import handlerMenu from './handlerMenu';

const toggleMenu = () => {
  const elemBody = document.querySelector('body'),
    freeVisitForm = document.getElementById('free_visit_form'),
    callbackForm = document.getElementById('callback_form');

elemBody.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.club-select')) {
    handlerMenu(target.closest('.club-select').querySelector('ul'));
  }
  if (target.closest('.open-popup')) {
    handlerMenu(freeVisitForm);
  }
  if (target.matches('.callback-btn') && !target.closest('#footer_form')) {
    handlerMenu(callbackForm);
  }
  if (target.matches('.close-btn') || target.closest('.close-form')) {
    if (target.closest('#callback_form')) {
      handlerMenu(target.closest('#callback_form'));
    }
    if (target.closest('#free_visit_form')) {
      handlerMenu(target.closest('#free_visit_form'));
    }
    if (target.closest('#thanks')) {
      handlerMenu(document.getElementById('thanks'));
    }
    if (target.closest('#gift')) {
      handlerMenu(document.getElementById('gift'));
    }
  } else if (target.matches('.close_icon')) {
      handlerMenu(target.closest('.popup'));
  }
  if (target.closest('.overlay')) {
    handlerMenu(elemBody.querySelector('.active'));
  }
  if (target.closest('.fixed-gift')) {
    elemBody.querySelector('.fixed-gift').style.display = 'none';
    handlerMenu(document.getElementById('gift'));
  }
});
};

export default toggleMenu;
