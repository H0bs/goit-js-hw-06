function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createCollectionBtn = document.querySelector('[data-create]');
const destroyCollectionBtn = document.querySelector('[data-destroy]');
const inputValue = document.querySelector('input');
const boxesCollection = document.querySelector('#boxes');

createCollectionBtn.addEventListener('click', createBoxes);
destroyCollectionBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputValue.value;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    boxesCollection.append(box);
    let dimensionsBox = (30 + (boxesCollection.children.length - 1) * 10);
    box.style.width = String(dimensionsBox) +'px';
    box.style.height = String(dimensionsBox) +'px';
    box.style.backgroundColor = getRandomHexColor();
  }
}
function destroyBoxes() {
  boxesCollection.innerHTML = "";
}