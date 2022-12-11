const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("input", onRangeInput);

function onRangeInput() {
  textEl.style.fontSize = rangeEl.value + "px";
}
