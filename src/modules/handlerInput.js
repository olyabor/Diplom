const handlerInput = () => {
  document.querySelector('body').addEventListener('input', (event) => {
    const target = event.target;
    target.style.border = '';
    if (
      target.matches('input[name="name"]') &&
      target.placeholder !== 'Промокод'
    ) {
      target.value = target.value.replace(/[^а-я\s]/gi, '');
    }
    if (target.matches('input[type="tel"]')) {
      target.minlength = '7';
      target.value = target.value.replace(/[^\+?\d{7,13}]/gi, '').slice(0,13);
    }
  });
};

export default handlerInput;