let counterValue = 0;


const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const onBtnIncrementClick = (event) => {
  value.textContent = counterValue += 1;
};
const onBtnDecrementClick = (event) => {
  value.textContent = counterValue -= 1;
};

btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", onBtnIncrementClick);

