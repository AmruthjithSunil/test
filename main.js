let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterFn);
form.addEventListener('keyup', filterFn);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success btn-sm float-right';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    li.appendChild(document.createElement('br'));

    let newDesc = document.getElementById('description').value;
    li.appendChild(document.createTextNode(newDesc));

    itemList.appendChild(li);
    document.getElementById('item').value = '';
    document.getElementById('description').value = '';

    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        item.style.display = 'block';
    });
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterFn(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let descName = item.childNodes[4].textContent;
        if(itemName.toLowerCase().indexOf(text) == -1 && descName.toLowerCase().indexOf(text) == -1){
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
}