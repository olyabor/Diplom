'use strict';
const elemBody = document.querySelector('body'),
  freeVisitForm = document.getElementById('free_visit_form'),
  callbackForm = document.getElementById('callback_form');
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
  if (target.matches('.close_icon')) {
    handlerMenu(target.closest('.popup'));
  }
  if (target.closest('.overlay')) {
    handlerMenu(elemBody.querySelector('.active'));
  }
  if (target.closest('.fixed-gift')) {
    elemBody.querySelector('.fixed-gift').style.display = 'none';
    handlerMenu(document.getElementById('gift'));
  }
  if (target.closest('.close-btn') && target.closest('#thanks')){
    handlerMenu(document.getElementById('thanks'));
  }
  if (target.closest('.close-btn') && target.closest('#gift')) {
    handlerMenu(document.getElementById('gift'));
  }
});

// Отправка формы
const sendForm = () => {
  const errorMessage = 'Ошибка',
    loadMessage = 'Идет отправка',
    successMessage = 'Отправлено',
    patternPhone = /^\+?\d+$/;

  const bannerForm = document.getElementById('banner-form'),
    cardOrder = document.getElementById('card_order'),
    footerForm = document.getElementById('footer_form'),
    freeVisitForm = document.getElementById('free_visit_form'),
    callbackForm = document.getElementById('callback_form'),
    overlay = document.querySelector('.overlay'),
    thanks = document.getElementById('thanks');

  let mess = document.createElement('p');
  mess.style = 'color: white';
  mess.id = 'mess';

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });
  };

  const successWindow = () => {
    handlerMenu(thanks);
    thanks.querySelector('.form-content').innerHTML = `
            <h4>Спасибо!</h4>
            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
            <button class="btn close-btn">OK</button>`;
  };

  const errorWindow = () => {
    handlerMenu(thanks);
    thanks.querySelector('.form-content').innerHTML = `
      <h4>Ошибка!</h4>
      <p>Отправка не удалась.</p>
      <button class="btn close-btn">OK</button>`;
  };

  const valid = (input) => {
    let flag = true;
    input.forEach((elem) => {
      if (elem.type === 'tel' && !patternPhone.test(elem.value)) {
        elem.style.border = 'solid red';
        flag = false;
      }
    });
    return flag;
  };

  document.querySelectorAll('.personal-data>input[type="checkbox"]').forEach(item => {item.required = false;});

  const sendData = (event) => {
    const form = event.target,
      personalData = form.querySelector('.personal-data>input[type="checkbox"]'),
      club = form.querySelectorAll('.club>input[type="radio"]'),
      formContent = form.innerHTML;

    event.preventDefault();
    const isChecked = (element) => element.checked === true;
    let input = form.querySelectorAll('input');
    const clearInput = () => {
      form.innerHTML = formContent;
      input = form.querySelectorAll('input[type="text"]');
      input.forEach((item) => {
        item.value = '';
        item.style.border = '';
      });
      if (personalData) {
        personalData.checked = false;
      }
      if (club) {
        [...club].forEach((item) => item.checked = false);
      }
      mess.remove();
    };

    if (valid(input)) {
      input.forEach((item) => {
        item.style.border = '';
      });
      if (
        (personalData && personalData.checked) ||
        (form.closest('#footer_form') && [...club].some(isChecked))
      ) {
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });
        mess.remove();
        form.innerHTML += `<h4>${loadMessage}</h4>`;

        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              if (
                form.closest('#callback_form') ||
                form.closest('#free_visit_form')
              ) {
                form.innerHTML = `<h4>${errorMessage}</h4>`;
              }
              if (
                form.closest('#banner-form') ||
                form.closest('#footer_form')
              ) {
                errorWindow();
              }
              throw new Error('status network is not 200');
            } else {
              if (
                form.closest('#callback_form') ||
                form.closest('#free_visit_form')
              ) {
                form.innerHTML = `<h4>${successMessage}</h4>`;
              }
              if (
                form.closest('#banner-form') ||
                form.closest('#footer_form')
              ) {
                successWindow();
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        if (club) {
          mess.innerHTML = `Не выбран клуб`;
        }
        if (personalData) {
          mess.innerHTML = `Необходимо подтвердить согласие на обработку данных`;
          personalData.addEventListener('change', () => {
            if (personalData.checked) {
              mess.remove();
            }
          });
        }
        if (!form.querySelector('#mess')) {
          form.append(mess);
        }
        if (club) {
          [...club].forEach((item) =>
            item.addEventListener('change', () => {
              if (item.checked) {
                mess.remove();
              }
            })
          );
        }
      } 
    }
    elemBody.addEventListener('click', (e) => {
      if (
        e.target.matches('.close_icon') ||
        e.target.matches('.overlay') ||
        e.target.matches('.close-btn')
      ) {
        clearInput();
      }
    });
  };

  bannerForm.addEventListener('submit', sendData);
  cardOrder.addEventListener('submit', sendData);
  footerForm.addEventListener('submit', sendData);
  callbackForm.addEventListener('submit', sendData);
  freeVisitForm.addEventListener('submit', sendData);

  document.querySelectorAll('input[type=text]').forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^а-я\s]/gi, '');
    });
  });
};

sendForm();

//Слайдер
const mainSlider = () => {
  const mainSlider = document.querySelector('.main-slider'),
    slide = mainSlider.querySelectorAll('.slide');
  let currentSlide = 0,
    interval;

  const autoPlaySlide = () => {
    slide[currentSlide].style.display = 'none';
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    slide[currentSlide].style = '';
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  mainSlider.addEventListener('mouseover', (event) => {
    if (event.target.closest('.main-slider')) {
      stopSlide();
    }
  });

  mainSlider.addEventListener('mouseout', (event) => {
    if (event.target.closest('.main-slider')) {
      startSlide();
    }
  });

  startSlide(1500);
};
mainSlider();


