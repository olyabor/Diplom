'use strict';
// Открытие и закрытие выпадающего списка, модальные окна
const handlerMenu = (menu) => {
  let style = document.getElementById('select-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'select-style';
  }
  style.textContent = `
  .active {
    display: flex !important;
  }
  .clubs-list .active {
    display: block !important;
  }
  `;
  menu.classList.toggle('active');
  document.querySelector('.top-menu').style.cssText = menu.classList.contains('active')
    ? 'z-index: 0'
    : 'z-index: 4444';
  document.head.append(style);
};

export default handlerMenu;
