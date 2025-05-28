const form = document.querySelector('.feedback-form');
const formEmail = form.elements.email;
const formMessage = form.elements.message;

const localStorageKey = 'feedback-form-state';

let formData = { email: '', message: '' };

try {
  let storedData = localStorage.getItem(localStorageKey);
  formData = storedData ? JSON.parse(storedData) : formData;
} catch (e) {
  console.log(e.message);
}

formEmail.value = formData.email;
formMessage.value = formData.message;

const handleInput = evt => {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
  }

  if (evt.target.name === 'message') {
    formData.message = evt.target.value;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
const handleSubmit = evt => {
  evt.preventDefault();

  if (formEmail.value === '' || formMessage.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
