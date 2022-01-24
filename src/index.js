import './style.css';
import menuIcon from './img/menu.png';
import expand from './img/noun-expand-1181747.png';
import { mdiChevronDown, mdiControllerClassic } from '@mdi/js';
// import delete from './img/delete.png';
import { getDate, itemListArr, ListItem } from './app.js';

const removeDisplayNone = (d) => {
    return d.classList.remove('display');
}

const addDisplayNone = (d) => {
    return d.classList.add('display');
}

const menuEventListener = (() => {
    const menuLogo = document.querySelector('.menu-icon');
    const mainSidebar = document.querySelector('.main-sidebar');
    menuLogo.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('test');
        mainSidebar.classList.toggle('display');
    })
})();

const newItemBtnListener = (() => {
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    newItemBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //remove display none from input form items
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);
    })
})();

const deleteBtnListener = (() => {
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    console.log(listItemDeleteBtns);

    //query selector all, THEN forEach or Map function to add event listener to all delete btns
    // listItemDeleteBtns.addEventListener('click', e => {
    //     alert('Are you sure you want to delete this item?');
    // })
    // console.log(listItemDeleteBtns.entries);
    listItemDeleteBtns.forEach(btn => {
        console.log(btn);
        btn.addEventListener('click', e => {
            const listItem = e.target.parentNode.parentNode.parentNode.parentNode;
            const confirmAnswer = confirm('are you sure you want to delete this item?');
            if (confirmAnswer) {
                console.log(itemListArr);
            } 
        })
    })
})();

// const expandBtnListener = (() => {
//     const expandIcon = document.querySelector('.expand-icon');
//     const goShoppingItemTest = document.querySelector('#go-shopping');
//     const itemOptions = document.querySelector('.item-options-container');
//     const itemText = document.querySelector('#item-text');
//     expandIcon.addEventListener('click', (e) => {
//         console.log(e, e.target);
//         e.preventDefault();
//         // goShoppingItemTest.classList.remove('list-item');
//         goShoppingItemTest.classList.toggle('expand-container');
//         // itemOptions.classList.toggle('expand-container');

//         const itemwrapper = document.createElement('div');
//         itemwrapper.classList.add('list-item');
//         itemwrapper.appendChild(itemText);
//         itemwrapper.appendChild(itemOptions);

//         goShoppingItemTest.appendChild(itemwrapper);
        

//         const details = document.createElement('div');
//         details.classList.add('details-container');
//         goShoppingItemTest.appendChild(details);  
//     })
// })();


// const testItem = new ListItem('z', "asdfasdf", getDate());
// console.log(testItem);

const createItemHTML = (i) => {
    const orderedItemList = document.querySelector('.ordered-item-list');

    //create item options container
    const createNewItemOptionsContainer = document.createElement('div');
    createNewItemOptionsContainer.classList.add('item-options-container');


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

    //append icon, delete btn to list item
    createNewItemOptionsContainer.appendChild(createItemDeleteBtn);
    createNewItemOptionsContainer.appendChild(createExpandIconBtn);


    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.classList.add('text');
    newListItem.textContent = i.name;

    //add item options container
    newListItem.appendChild(createNewItemOptionsContainer);

    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);

}

const addListItemToArr = (i) => {
    itemListArr.push(i);
    console.log(itemListArr);    
    const lastItem = itemListArr[itemListArr.length - 1];
    createProjectLocalStorage();
}

const formSubmission = ((e)=> {
    const form = document.querySelector('.form-main');
    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        //remove form display
        e.preventDefault();
        //create new list item
        const item = new ListItem(`${inputValue}`, getDate());
        //push item to array
        addListItemToArr(item);
        //create item in DOM
        return createItemHTML(item);
    })
})();


const createProjectLocalStorage = () => {
    const LOCALSTOR = window.localStorage;
    console.log(LOCALSTOR);

    //name of project that user creates is the key name that is pushed to the localstorage object
    //the value of the key value pair is the object array that is created for each project (list of items)
    // LOCALSTOR.arrayOne = itemListArr;
    const testJSON = JSON.stringify(itemListArr);
    console.log(testJSON);
    localStorage.setItem(" ", " ");
    console.log(LOCALSTOR);
}
