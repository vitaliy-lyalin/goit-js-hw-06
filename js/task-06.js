const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', checkLength);

function checkLength() {
  console.log(textInputEl.value.length);
  console.log(textInputEl.dataset.length);

  const currrentValue = textInputEl.value.length;
  const datasetLength = Number(textInputEl.dataset.length);

  console.log(typeof currrentValue);
  console.log(typeof datasetLength);

  if (currrentValue !== datasetLength) {
    textInputEl.classList.add('invalid');
  } else {
    textInputEl.classList.replace('invalid', 'valid');
  }
  return checkLength;
}
