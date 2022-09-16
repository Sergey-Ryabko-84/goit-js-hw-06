const inputFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const handleFontSize = () => textEl.style.fontSize = `${inputFontSizeEl.value / 3.5}px`;

inputFontSizeEl.addEventListener('input', handleFontSize);