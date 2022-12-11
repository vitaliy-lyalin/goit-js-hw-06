const buttonChangeColorRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const spanValueRef = document.querySelector(".color");

buttonChangeColorRef.addEventListener("click", onBtnClick);

function onBtnClick() {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  spanValueRef.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
