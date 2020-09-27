import handlerMenu from './handlerMenu';

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
    elemBody = document.querySelector('body'),
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

  document
    .querySelectorAll('.personal-data>input[type="checkbox"]')
    .forEach((item) => {
      item.required = false;
    });

  const sendData = (event) => {
    const form = event.target,
      personalData = form.querySelector(
        '.personal-data>input[type="checkbox"]'
      ),
      club = form.querySelectorAll('.club>input[type="radio"]'),
      cardCheck = form.querySelector('#card_check'),
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
      if (cardCheck) {
        cardCheck.checked = false;
      }
      if (club) {
        [...club].forEach((item) => (item.checked = false));
      }
      mess.remove();
    };

    if (valid(input)) {
      input.forEach((item) => {
        item.style.border = '';
      });
      if (
        (personalData && personalData.checked) ||
        (cardCheck && cardCheck.checked) ||
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
                form.closest('#footer_form') ||
                form.closest('#card_order')
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
                form.closest('#footer_form') ||
                form.closest('#card_order')
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
          mess.innerHTML = `<p style = "color: red;">Не выбран клуб</p>`;
        }
        if (personalData || cardOrder) {
          mess.innerHTML = `<p style = "color: red;">Необходимо подтвердить согласие на обработку данных</p>`;
          [personalData, cardOrder].forEach((item) => {
            if (item) {
              item.addEventListener('change', () => {
                if (item.checked) {
                  mess.remove();
                }
              });
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
      item.value = item.value.replace(/[^а-я\d\s]/gi, '');
    });
  });
};

export default sendForm;
