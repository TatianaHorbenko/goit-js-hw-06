const formEl = document.querySelector('form.login-form')

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value; 
  const formData = { email, password };
  if (email && password) {
    event.currentTarget.reset();
    console.log(formData);
      } else {
      alert('Все поля должны быть заполнены')
  }
  }
