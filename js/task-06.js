const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputChange);

function onInputChange(event) {
    let count = event.currentTarget.value;
    if (count.length !== Number(input.dataset.length)) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}