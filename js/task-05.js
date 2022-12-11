const inputEl = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  output.textContent = event.currentTarget.value;
}
