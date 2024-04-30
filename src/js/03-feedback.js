import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textEmail = document.querySelector('[name="email"]');
const textMessage = document.querySelector('[name="message"]');

const LOCAL_KEY = 'feedback-form-state';

let storageObj = {};

form.addEventListener('input', throttle(inputValue, 500));
form.addEventListener('submit', onFormSubmit);

currentLocal();

function inputValue(ev) {
  const nameTarget = ev.target.name;
  const valueTarget = ev.target.value;

  if (nameTarget === 'email') {
    storageObj.email = valueTarget;
  } else if (nameTarget === 'message') {
    storageObj.message = valueTarget;
  }

  localStorage.setItem(LOCAL_KEY, JSON.stringify(storageObj));
}

function onFormSubmit(ev) {
  ev.preventDefault();
  console.log(storageObj);
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
}

function currentLocal() {
  const localItem = JSON.parse(localStorage.getItem(LOCAL_KEY));
  // console.log(localItem);
  if (storageObj.email && storageObj.message !== null) {
    localItem.email = textEmail.value;
    localItem.message = textMessage.value;
  }
}
