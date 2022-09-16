const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handleHelloInput = () => {
    inputEl.value.trim() === ''?
    outputEl.textContent = 'Anonymous':
    outputEl.textContent = inputEl.value
}

inputEl.addEventListener('input', handleHelloInput);