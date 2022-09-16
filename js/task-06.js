const inputEl = document.querySelector('#validation-input');

const handleBlurInput = () => {
    inputEl.value.trim().length === Number(inputEl.dataset.length)?
    inputEl.classList = 'valid':
    inputEl.classList = 'invalid'
}

inputEl.addEventListener('blur', handleBlurInput);