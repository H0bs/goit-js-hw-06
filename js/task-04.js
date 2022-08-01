const counterValue = document.querySelector('#value');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

let counter = 0;

buttonIncrement.addEventListener('click', () => {
    // const btnIncrValue = parseInt(buttonIncrement.textContent);
    counter += 1;
    counterValue.textContent = counter;
});

buttonDecrement.addEventListener('click', () => {
    // const btnDecrValue = parseInt(buttonDecrement.textContent);
    counter -= 1;
    counterValue.textContent = counter;
});

