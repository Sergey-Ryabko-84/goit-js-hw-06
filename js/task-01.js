const items = document.querySelector('#categories').children;

console.log('Number of categories:', items.length);

[...items].forEach(itemEl => {
    console.log('Category:', itemEl.firstElementChild.textContent );
    console.log('Elements:', itemEl.lastElementChild.children.length);    
});