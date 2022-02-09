const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

const changeFontSize = () => {
  spanTextEl.style.fontSize = `${Number(inputEl.value)}px`;
};

inputEl.addEventListener('input', changeFontSize);

