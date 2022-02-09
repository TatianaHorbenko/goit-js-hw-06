const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  if (event.target.value === '') {
    return (spanEl.textContent = 'Anonymous');
  }
  return (spanEl.textContent = event.target.value);
});

