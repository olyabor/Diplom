const windowEvents = () => {
  const menuButton = document.querySelector('.top-menu .menu-button'),
    topMenu = document.querySelector('.top-menu'),
    popupMenu = document.querySelector('.header-main .popup-menu'),
    totop = document.querySelector('#totop');

  totop.style.display = 'none';
  
  const burgerMenu = () => {
    if (window.innerWidth <= 768) {
      menuButton.classList.remove('hidden-large');
      document.querySelector('.top-menu ul').style.display = 'none';
    } else {
      document.querySelector('.top-menu ul').style.display = 'flex';
      menuButton.classList.add('hidden-large');
    }
  };
  burgerMenu();
  
  window.addEventListener('resize', () => {
    burgerMenu();
  });

  window.addEventListener('scroll', () => {
    const headMainHeight = document.querySelector('.head-main').offsetHeight,
      breadcrumbs = document.querySelector('.breadcrumbs'),
      clubs = document.querySelector('#clubs');
    if (window.scrollY > headMainHeight) {
      topMenu.style.position = 'fixed';
      topMenu.style.top = '0';
      topMenu.style.left = '0';
      topMenu.style.width = '100%';
    } else {
      topMenu.style.position = 'relative';
      topMenu.style.top = 'initial';
      topMenu.style.left = 'initial';
    }
    totop.style.display =
      (breadcrumbs || clubs).getBoundingClientRect().y <= 0 ? 'block' : 'none';
  });

  menuButton.addEventListener('click', () => {
    popupMenu.style.display = 'flex';
  });

  popupMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.close-menu-btn') || target.closest('.scroll>a')) {
      popupMenu.style.display = 'none';
    }
  });
};
export default windowEvents;
