let counterValue = 0;
const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]')

const handleDecrementClick = () => {
    counterValue -=1;
    counterEl.textContent = counterValue;
}
const handleIncrementClick = () => {
    counterValue +=1;
    counterEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', handleDecrementClick);
incrementBtn.addEventListener('click', handleIncrementClick);