


const totalCategories= document.querySelectorAll('.item');

console.log('Number of categories ', totalCategories.length);

totalCategories.forEach(function (category) {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Element: ', category.lastElementChild.children.length);
});

