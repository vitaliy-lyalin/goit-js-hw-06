const decrermentBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  return (valueEl.textContent = counterValue);
};
const decrement = () => {
  counterValue -= 1;
  return (valueEl.textContent = counterValue);
};

incrementBtnEl.addEventListener("click", increment);
decrermentBtnEl.addEventListener("click", decrement);
