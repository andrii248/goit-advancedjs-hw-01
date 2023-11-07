import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;

try {
  const parseSettings = JSON.parse(localStorage.getItem(LS_KEY));

  formEmail.value = parseSettings.email || '';
  formMessage.value = parseSettings.message || '';
} catch (error) {}

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  let resultObj = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};

  if (evt.target.name === 'email') {
    resultObj.email = evt.target.value;
  } else if (evt.target.name === 'message') {
    resultObj.message = evt.target.value;
  }
  localStorage.setItem(LS_KEY, JSON.stringify(resultObj));
}

function handleSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(LS_KEY);

  if (!formEmail.value || !formMessage.value)
    return alert('Please fill out all the fields');
  console.log({ email: formEmail.value, message: formMessage.value });
  form.reset();
}
