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
  `;
  menu.classList.toggle('active');
  document.head.append(style);
};

export default handlerMenu;
