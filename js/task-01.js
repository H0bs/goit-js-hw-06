const listEl = document.querySelector('#categories');
console.log('Number of categories: ', listEl.children.length);

const itemEl = document.querySelectorAll('.item h2');
const itemListEl = document.querySelectorAll('.item ul');

console.log('Category: ', itemEl[0].textContent);
console.log('Elements: ', itemListEl[0].children.length);
console.log('Category: ', itemEl[1].textContent);
console.log('Elements: ', itemListEl[1].children.length);
console.log('Category: ', itemEl[2].textContent);
console.log('Elements: ', itemListEl[2].children.length);




