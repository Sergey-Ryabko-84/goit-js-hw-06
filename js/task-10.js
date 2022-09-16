function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const handleCreateBtnClick = () => createBoxes(inputNumberEl.value);

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.height = `${30 + 10 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesArr.push(boxEl);
  }
  document.querySelector('#boxes').append(...boxesArr);
}

function destroyBoxes() {
  [...document.querySelector('#boxes').children].forEach(box => box.remove());
}

createBtn.addEventListener('click', handleCreateBtnClick);
destroyBtn.addEventListener('click', destroyBoxes);