
/* elements qui appartiennent au html ecrit */
const btnAddItem = document.querySelector('button');
const inputItem = document.querySelector('input');
const listItem = document.querySelector('ul');
let newItem;


btnAddItem.addEventListener("click", addItem);

function addItem() {
    console.log('input = $' + inputItem.value + '$');
    if (inputItem.value.length < 1) {
        return ;
    }
    newItem = inputItem.value;
    inputItem.value = '';
   
    /* création de nouveaux éléments */
    const item = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const spanItem = document.createElement('span');

    item.appendChild(spanItem);
    item.appendChild(deleteBtn);

    spanItem.innerText = newItem;
    deleteBtn.innerText = "Supprimer";
    listItem.appendChild(item);
    console.log("new item = " + newItem);

    deleteBtn.addEventListener("click", () => {
        listItem.removeChild(item);
        inputItem.focus();
    });
    inputItem.focus();
}
