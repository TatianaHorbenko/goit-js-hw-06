function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector('span.color');
const changeColorBtnEl = document.querySelector('button.change-color');

changeColorBtnEl.addEventListener('click', onChangeColorClick);



function onChangeColorClick() {
    spanColorEl.textContent = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
}