
const spanColorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyColorEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onChangeColor= () =>{
  const changeColor = getRandomHexColor();

  bodyColorEl.setAttribute("style", ` background-color:${changeColor} `);
  spanColorEl.textContent = changeColor;
}
changeColorBtn.addEventListener("click", onChangeColor);


