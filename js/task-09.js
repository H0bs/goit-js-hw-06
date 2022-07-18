function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const bgColorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn(event) {
  event.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  bgColorValue.textContent = getRandomHexColor();
}
