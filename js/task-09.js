function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValueSpan = document.querySelector('.color');

const handleChangeColor = () => {
  const randomHexColor = getRandomHexColor()
  document.body.style.backgroundColor = randomHexColor;
  colorValueSpan.textContent = `${randomHexColor}`;
}

changeColorBtn.addEventListener('click', handleChangeColor);