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
}

let newItem = document.getElementsByClassName('new-list-item');
console.log(newItem);
newItem[0].style.fontWeight = 'bold';

let items = document.getElementsByTagName('li');
console.log(items[4]);
items[4].style.color = 'green';*/

let item2 = document.querySelector('li:nth-child(2)');
item2.style.backgroundColor = 'green';
let item3 = document.querySelector('li:nth-child(3)');
item3.style.visibility = 'hidden';

let items = document.querySelectorAll('li');
items[1].style.color = 'green';
let oddItems = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<oddItems.length; i++){
    oddItems[i].style.backgroundColor = 'green';
}