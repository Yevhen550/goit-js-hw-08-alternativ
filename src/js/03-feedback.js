import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', inputValue);

function inputValue(ev) {
  const targetValue = ev.target.value;
  localStorage.setItem(LOCAL_KEY, targetValue);
}
