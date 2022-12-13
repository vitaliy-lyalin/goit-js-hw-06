const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert('Please fill in all the fields!');
  } else {
    const formInput = {
      email: email.value,
      password: password.value,
    };
    console.log(formInput);
    formEl.reset();
  }
}
