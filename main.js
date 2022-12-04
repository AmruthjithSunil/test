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

/*let item2 = document.querySelector('li:nth-child(2)');
item2.style.backgroundColor = 'green';
let item3 = document.querySelector('li:nth-child(3)');
item3.style.visibility = 'hidden';

let items = document.querySelectorAll('li');
items[1].style.color = 'green';
let oddItems = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<oddItems.length; i++){
    oddItems[i].style.backgroundColor = 'green';
}*/

let itemList = document.querySelector('#items');
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);*/

/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);*/

//console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'lightblue';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Amruth';*/

/*console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Amruthjith';*/

/*console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);*/

/*console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';*/

let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

let newDiv1 = document.createElement('div');
newDiv1.className = 'hello';
newDiv1.id = 'hello1';
newDiv1.setAttribute('title','Hello Div');
let newDivText1 = document.createTextNode('Hello World');
newDiv1.appendChild(newDivText1);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
let li = document.querySelector('.list-group-item');
let container1 = document.querySelector('#items');
console.log(newDiv);
container.insertBefore(newDiv, h1);
container1.insertBefore(newDiv1, li);