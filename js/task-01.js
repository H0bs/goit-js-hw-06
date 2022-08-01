const listEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
})



