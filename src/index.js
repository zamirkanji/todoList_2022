import './style.css';
import menuIcon from './img/menu.png';
import expand from './img/noun-expand-1181747.png';
import { mdiChevronDown } from '@mdi/js';
// import delete from './img/delete.png';
import { getDate, itemListArr, ListItem } from './app.js';


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
    const submitBtn = document.querySelector('#submit-btn');
    newItemBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('test');
        inputNewItem.classList.toggle('display');
        submitBtn.classList.toggle('display');
    })
    submitBtn.onclick = (e) => {
        // e.preventDefault();
    }
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


const testItem = new ListItem('z', "asdfasdf", getDate());
console.log(testItem);

const getValue = () => {
    console.log('test');
    const inputValue = document.querySelector('#input-new-item').value;
    return console.log(inputValue);
}

const createItemHTML = (i) => {
    const orderedListNode = document.querySelector('.ordered-item-list');
    
    const lastItem = itemListArr[itemListArr.length - 1];
    console.log(lastItem);
    console.log(i, i.name);
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.classList.add('text');

    newListItem.textContent = i.name;

    orderedListNode.appendChild(newListItem);

}

const formSubmission = ((e)=> {
    const form = document.querySelector('.form-main');
    
    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        //remove form display
        e.preventDefault();
        
        const item = new ListItem(`${inputValue}`, getDate());

        itemListArr.push(item);
        console.log(itemListArr);
        createProjectLocalStorage();

        return createItemHTML(item);
    })
})();


const createProjectLocalStorage = () => {
    const LOCALSTOR = window.localStorage;
    console.log(LOCALSTOR);

    //name of project that user creates is the key name that is pushged to the localstorage object
    //the value of the key value pair is the object array that is created for each project (list of items)
    LOCALSTOR.arrayOne = itemListArr;
    console.log(LOCALSTOR);
}
