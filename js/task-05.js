const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
  return event.currentTarget.value
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = 'Anonymous');
}
