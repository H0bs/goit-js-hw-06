const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onSizeControlChange);

function onSizeControlChange(event) {
    text.style.fontSize = input.value + 'px';
    console.log(text.style.fontSize);
}