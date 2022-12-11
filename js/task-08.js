const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget);
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const formInput = {
    email: email.value,
    password: password.value,
  };
  console.log(formInput);
  event.currentTarget.reset();
}
