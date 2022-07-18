const counterValue = document.querySelector('#value');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');


buttonIncrement.addEventListener('click', () => {
    let counter = parseInt(counterValue.textContent);
    const btnIncrValue = parseInt(buttonIncrement.textContent);
    counter += btnIncrValue;
    counterValue.textContent = counter;
});

buttonDecrement.addEventListener('click', () => {
    let counter = parseInt(counterValue.textContent);
    const btnDecrValue = parseInt(buttonDecrement.textContent);
    counter += btnDecrValue;
    counterValue.textContent = counter;
});

