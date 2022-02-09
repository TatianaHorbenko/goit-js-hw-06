const counterEl = document.querySelector('#counter');
const counterValueEl = counterEl.querySelector('#value');
const decrementbtnEl = counterEl.querySelector(
  'button[data-action="decrement"]',
);
const incrementbtnEl = counterEl.querySelector(
  'button[data-action="increment"]',
);

let counterValue = 0;

decrementbtnEl.addEventListener('click', decrement);
incrementbtnEl.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}





decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onIncrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}
// 1. Находим в DOM счётчик по ID
// 2. Находим ID значения счётчика
// 3. Находим кнопку увеличения счётчика
// 4. Находим кнопку уменьшения счётчика
// 5. Создаем переменную, которая содержит текущее значение счётчика
// 6. Добавляем на обе кнопки слушателя событий (при клике) и коллбек функцию
// 7. Создаем две функции, которые изменяют значение переменной на 1 и записывают переменную в textContent значения счётчика.