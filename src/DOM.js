import { deleteBtnListener, expandBtnListener, itemEditable, ifChecked } from ".";



//create btns for submit and cancel when editing item
const createSubmitCancelBtns = () => {
    


    const submitTextChange = document.createElement('button');
    const cancelTextChange = document.createElement('button');
}



//create item in HTML, add to DOM
const createItemHTML = (n, dc, projectName) => {
    const orderedItemList = document.querySelector('.ordered-item-list');
    //create item options container
    const createNewItemOptionsContainer = document.createElement('div');
    createNewItemOptionsContainer.classList.add('item-options-container');

    const listInputContainer = document.createElement('div');
    listInputContainer.classList.add('list-input-container');


    //add DELETE Btn/Icon to item
    const createItemDeleteBtn = document.createElement('div');
    createItemDeleteBtn.classList.add('item-delete-btn');
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete-item';
    const deleteIcon = document.createElement('div');
    deleteIcon.id = 'delete-icon';
    deleteBtn.appendChild(deleteIcon);
    createItemDeleteBtn.appendChild(deleteBtn);


    //add EXPAND Btn/Icon to item
    const createExpandIconBtn = document.createElement('button');
    createExpandIconBtn.classList.add('expand-icon-btn');
    createExpandIconBtn.type = 'button';
    createExpandIconBtn.name = 'expand-icon-btn';
    const createExpandIconDiv = document.createElement('div');
    createExpandIconDiv.classList.add('expand-icon');
    createExpandIconBtn.appendChild(createExpandIconDiv);


    //add checkbox
    const checkboxLabel = document.createElement('label');
    checkboxLabel.for = 'item-checkbox';
    checkboxLabel.id = 'item-checkbox-label';
    const createCheckbox = document.createElement('input');
    createCheckbox.id = 'item-checkbox';
    createCheckbox.type = 'checkbox';
    createCheckbox.name = 'item-checkbox';
    //add important Icon

    //append icon, delete btn to list item
    createNewItemOptionsContainer.appendChild(createItemDeleteBtn);
    createNewItemOptionsContainer.appendChild(createExpandIconBtn);


    //new list item 
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');


    const inputText = document.createElement('input');
    inputText.classList.add('item-text');
    inputText.disabled = 'disabled';
    inputText.type = 'text';
    inputText.classList.add('text');
    inputText.value = n;
    
    //add item options container
    newListItem.appendChild(listInputContainer);
    listInputContainer.appendChild(checkboxLabel);
    listInputContainer.appendChild(createCheckbox);
    listInputContainer.appendChild(inputText);
    newListItem.appendChild(createNewItemOptionsContainer);
    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);


    //return delete btn, expand btn listener once item is created 
    if (document.querySelector('#projectNameHeader').textContent === 'myProject') {
        return;
    } else {
            // const a = deleteBtnListener(projectName);
            const b = expandBtnListener();
            const c = itemEditable();
            const d = ifChecked();
            // return a && b;
            return b && c && d;
    }
}

export default createItemHTML;