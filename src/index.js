import './style.css';
import menuIcon from './img/menu.png';
import expand from './img/noun-expand-1181747.png';
import { mdiChevronDown, mdiControllerClassic } from '@mdi/js';
import { getDate, itemListArr, ListItem } from './app.js';
import createDefaultArrayList from './defaultProject';

const DOMLoaded = (() => {
    window.addEventListener('DOMContentLoaded', (e) => {
        console.log('DOM content loaded');
        // loadDefaultPage();
        loadSessionStoragePage();
    });
})()


//remove display (none) from element 
const removeDisplayNone = (d) => {
    return d.classList.remove('display');
}

//add display (none) to element 
const addDisplayNone = (d) => {
    return d.classList.add('display');
}

//create item in HTML, add to DOM
const createItemHTML = (n, dc) => {
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
    newListItem.textContent = n;

    //add item options container
    newListItem.appendChild(createNewItemOptionsContainer);

    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);

    return deleteBtnListener();

}

//event listener to delete item 
const deleteBtnListener = () => {
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    const clearAllBtn = document.getElementById('clear-all-items-btn');
    // console.log(listItemDeleteBtns);

    //query selector all, THEN forEach or Map function to add event listener to all delete btns
    // listItemDeleteBtns.addEventListener('click', e => {
    //     alert('Are you sure you want to delete this item?');
    // })
    // console.log(listItemDeleteBtns.entries);

    for (let i = 0; i < listItemDeleteBtns.length; i++) {
        // console.log(i);
        const btnIndex = i;
    }

    for(let j = 0; j < itemListArr.length; j++) {
        // console.log(j);
        const listItemIndex = j; 
    }

    clearAllBtn.addEventListener('click', () => {
        const ol = document.querySelector('.ordered-item-list');
        const confirmDeleteAll = confirm('Would you like to clear all items?');
        if (confirmDeleteAll) {
            while (ol.firstChild) {
                ol.removeChild(ol.firstChild);
            }
            //remove from arr/local storage
        }
        //would you like to clear all items and start over or delete project
        //delete all children under ordered item list 
    })

    listItemDeleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const listItem = e.target.parentNode.parentNode.parentNode.parentNode;
            const confirmAnswer = confirm('are you sure you want to delete this item?');
            if (confirmAnswer) {
                listItem.remove();

                // if (i === j) {
                //     itemListArr.filter(l => {
                //         !i;
                //     })
                // }
            } 
        })
    })
};

//load in default page (using defaultarraylist)
// const loadDefaultPage = () => {
//     const d = createDefaultArrayList();
//     d.forEach(obj => {
//         const n = obj.name;
//         const dc = obj.dateCreated;
//         createItemHTML(n, dc);
//     })
// }

//listen for form submission to add each item 

const formSubmission = (e)=> {
    const form = document.querySelector('.form-main');
    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        //remove form display
        e.preventDefault();
        //create new list item
        const item = new ListItem(`${inputValue}`, getDate());
        //get name and date from item (if needed)
        const n = item.getName();
        const dc = item.dateCreated;
        //pass name and date to add list item to arr
        return addListItemToArr(item);
        //create item in DOM
        // return createItemHTML(n, dc);

        //if listitemarr length > 0 push to end of arr
        // if not, go straight t
    })
};

//event listener to open up side menu bar
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
    let clickCount = 0;
    //default list displayed on first open.
    //if first time clicking (opening page), as in LOCAL STOR is empty
    //ask if user would like to clear all and start a new project 
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    newItemBtn.addEventListener('click', (e) => {
        clickCount++;
        console.log(clickCount);
        e.preventDefault();
        //remove display none from input form items
        if (clickCount === 1) {
            //ask user to name new project
            //wipe default list
            //start new project with name given (key name in local storage obj)
            const projectName = prompt('Please enter the name of your project');
        }
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);
    })

    return formSubmission();
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

//add each list item to array and then call local storage 

const addListItemToArr = (i) => {
    //instead of itemlistarr, use project array in local storage
    itemListArr.push(i);
    console.log(itemListArr);    
    const lastItem = itemListArr[itemListArr.length - 1];
    // console.log(lastItem);
    createProjectLocalStorage(itemListArr, lastItem);
    // createItemHTML(i);
}




//name of project that user creates is the key name that is pushed to the localstorage object
//the value of the key value pair is the object array that is created for each project (list of items)
const createProjectLocalStorage = (itemListArr, lastItem) => {
    const LOCALSTOR = window.localStorage;
    const SESSIONSTOR = window.sessionStorage;

    LOCALSTOR.setItem('myProject', JSON.stringify(itemListArr));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    console.log(LOCALSTOR.myProject);
    // localStorage.clear();

    const createItemFromLocalStorage = () => {
        // const d = createDefaultArrayList();
        const d = lastItem;
        // d.forEach(obj => {
            const n = d.name;
            const dc = d.dateCreated;
            createItemHTML(n, dc);
        // })
    }
    createItemFromLocalStorage();
    return LOCALSTOR;
}

//JSON.parse item list arr, and create html element for each item in LOCAL storage 
const loadSessionStoragePage = () => {
    console.log(itemListArr); //array list is being reset every time page loads
    const d = window.localStorage.myProject;
    console.log(d);
    const i = JSON.parse(d);
    i.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;
        createItemHTML(n, dc);
    })
}
// loadSessionStoragePage();
