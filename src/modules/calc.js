const calc = (orderData, discount = 0) => {
  const price = document.querySelector('#price-total');
  const priceList = [
    [
      { name: '1 МЕСЯЦ', type: 'СОЛО', price: 1999 },
      { name: '6 МЕСЯЦЕВ', type: 'СОЛО', price: 9900 },
      { name: '9 МЕСЯЦЕВ', type: 'СОЛО', price: 13900 },
      {
        name: '12 МЕСЯЦЕВ',
        type: 'ДНЕВНАЯ',
        price: 9900,
        freezeTime: '* 1 месяц заморозки',
      },
      {
        name: '12 МЕСЯЦЕВ',
        type: 'СОЛО',
        price: 19900,
        freezeTime: '* 1 месяц заморозки',
      },
    ],
    [
      { name: '1 МЕСЯЦ', type: 'СОЛО', price: 2999 },
      { name: '6 МЕСЯЦЕВ', type: 'СОЛО', price: 14990 },
      { name: '9 МЕСЯЦЕВ', type: 'СОЛО', price: 21990 },
      {
        name: '12 МЕСЯЦЕВ',
        type: 'ДНЕВНАЯ',
        price: 14990,
        freezeTime: '* 1 месяц заморозки',
      },
      {
        name: '12 МЕСЯЦЕВ',
        type: 'СОЛО',
        price: 24990,
        freezeTime: '* 1 месяц заморозки',
      },
    ],
  ];
  if (orderData) {
    const selectedTimeIndex =
      orderData['card-type'] === '1'
        ? 0
        : orderData['card-type'] === '6'
        ? 1
        : orderData['card-type'] === '9'
        ? 2
        : 3;
    const selectedClubIndex = orderData['club-name'] === 'mozaika' ? 0 : 1;
    price.textContent = Math.round(
      priceList[selectedClubIndex][selectedTimeIndex].price *
        (1 - discount / 100)
    );
  }
};

let defaultOrderData,
    discount;

document.querySelector('#cards').addEventListener('change', (event) => {
  const target = event.target;
  if (target.closest('.time')) {
    defaultOrderData['card-type'] = target.value;
  }
  if (target.matches('#card_leto_mozaika')) {
    defaultOrderData['club-name'] = 'mozaika';
  }
  if (target.matches('#card_leto_schelkovo')) {
    defaultOrderData['club-name'] = 'schelkovo';
  }
  if (target.matches('input[name="name"]') && target.value === "ТЕЛО2020") {
    discount = 30;
  }
  calc(defaultOrderData, discount);
});

export function reset () {
  discount = 0;
  defaultOrderData = {
    'card-type': '1',
    'club-name': 'mozaika',
    name: '',
    phone: '',
  };
  calc(defaultOrderData, discount);
}
reset();

export default calc;