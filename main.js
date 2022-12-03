/*let title = document.getElementsByClassName("title");
console.log(title[0]);
title[0].style.color = 'green';
title[0].style.fontWeight = 'bold';*/

/*let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

items[2].style.backgroundColor = 'green';

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}*/

let newItem = document.getElementsByClassName('new-list-item');
console.log(newItem);
newItem[0].style.fontWeight = 'bold';

let items = document.getElementsByTagName('li');
console.log(items[4]);
items[4].style.color = 'green';