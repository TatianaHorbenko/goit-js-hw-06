const spanColorEl = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');
const bodyColorEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeColor(){
  bodyColorEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = bodyColorEl.style.background
}
changeColorBtn.addEventListener("click", onChangeColor);