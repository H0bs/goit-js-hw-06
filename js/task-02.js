const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
// const listEl = ();
ingredients.forEach(ingrediend => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingrediend;
  console.log(itemEl);
  listIngredients.append(itemEl);
  // listEl.push(itemEl);
});
// console.log(listEl);

