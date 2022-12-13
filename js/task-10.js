const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const boxRef = document.querySelector('#boxes');

let number = 0;

inputRef.addEventListener('input', onInputValue);
btnCreateRef.addEventListener('click', () => createBoxes(number));
btnDestroyRef.addEventListener('click', destroyBoxes);

function onInputValue(event) {
  number = Number(event.currentTarget.value);
}

function createBoxes(amount) {
  let newDiv = '';
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let boxResize = boxSize + i * 10;
    newDiv += `<div style="width: ${boxResize}px; height: ${boxResize}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxRef.insertAdjacentHTML('beforeend', newDiv);
  console.log(boxRef);
}

function destroyBoxes() {
  boxRef.innerHTML = '';
  inputRef.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
