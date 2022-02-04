import './style.css';
import menuIcon from './img/menu.png';
import expand from './img/noun-expand-1181747.png';
import { mdiChevronDown, mdiControllerClassic, mdiWindowShutter } from '@mdi/js';
import { getDate, itemListArr, ListItem } from './app.js';
import createDefaultArrayList from './defaultProject';

const LOCAL = window.localStorage;
const SESSION = window.sessionStorage;

const DOMLoaded = (() => {
    window.addEventListener('DOMContentLoaded', (e) => {
        console.log('DOM content loaded');
        // window.localStorage.clear();
        // window.sessionStorage.clear();

        //if there is no current project in local storage, defualt page
        //otherwise, load in project from local storage
        window.localStorage.length === 0 ? loadDefaultPage() : loadSessionStoragePage();
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
    //add checkbox
    const checkboxLabel = document.createElement('label');
    checkboxLabel.for = 'item-checkbox';

    const createCheckbox = document.createElement('input');
    createCheckbox.id = 'item-checkbox';
    createCheckbox.type = 'checkbox';
    createCheckbox.name = 'item-checkbox';
    //add important Icon

    //append icon, delete btn to list item
    createNewItemOptionsContainer.appendChild(checkboxLabel);
    checkboxLabel.appendChild(createCheckbox);
    createNewItemOptionsContainer.appendChild(createItemDeleteBtn);
    createNewItemOptionsContainer.appendChild(createExpandIconBtn);
    //new list item 
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.classList.add('text');
    newListItem.textContent = n;
    //add item options container
    newListItem.appendChild(createNewItemOptionsContainer);
    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);
    //return delete btn, expand btn listener once item is created 
    return deleteBtnListener();
}

//event listener to delete item 
const deleteBtnListener = () => {
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    const clearAllBtn = document.getElementById('clear-all-items-btn');

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



//listen for form submission to add each item 

const formSubmission = (clickCount, projectName)=> {
    const form = document.querySelector('.form-main');
    // console.log(projectName);
    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        //remove form display
        e.preventDefault();
        //remove dispalay (add back display: none)
        const inputNewItem = document.querySelector('#input-new-item');
        const submitBtn = document.querySelector('#submit-btn');
        const labelNewItem = document.querySelector('.label-new-item');
        addDisplayNone(inputNewItem);
        addDisplayNone(submitBtn);
        addDisplayNone(labelNewItem);
        //clear input field on form Submit
        form.reset();
        //create new list item
        const item = new ListItem(`${inputValue}`, getDate());

        if (LOCAL.length > 0) {
            //add to current project array in local storage 
            // return addListItemToArr(item); 
            addClickCount(clickCount, projectName);
            return projectLocalStorage(projectName, item, clickCount);
        } else {
            //wipe default project and 
            // create new project and new item object in local storage
            // return projectLocalStorage(projectName, item);
            
            return createProjectLocalStorage(projectName, item);
        }
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
        let projectName;
        if (clickCount === 1) {
            //ask user to name new project
            //wipe default list
            //start new project with name given (key name in local storage obj)
            projectName = prompt('Please enter the name of your project', 'myProject');
            //add new project name to top of page
            document.querySelector('#projectNameHeader').textContent = projectName;
            //create new folder in current project list
            createProjectFolder(projectName);
            //clear default array list 
            const ol = document.querySelector('.ordered-item-list');
                if (true) {
                    while (ol.firstChild) {
                        ol.removeChild(ol.firstChild);
                    }   
                    //remove from arr/local storage
                }
        }
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);

        return formSubmission(clickCount, projectName);
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

//add each list item to array and then call local storage 

const addListItemToArr = (i) => {
    //instead of itemlistarr, use project array in local storage
    itemListArr.push(i);
    console.log(itemListArr);    
    const lastItem = itemListArr[itemListArr.length - 1];
    // console.log(lastItem);
    projectLocalStorage(itemListArr, lastItem);
    // createItemHTML(i);
}




//name of project that user creates is the key name that is pushed to the localstorage object
//the value of the key value pair is the object array that is created for each project (list of items)
const projectLocalStorage = (projectName, item, clickCount) => {
    //FIND PROJECT NAME AND PUSH LAST ITEM INTO IT 
    const LOCALSTOR = window.localStorage;
    const SESSIONSTOR = window.sessionStorage;
    // LOCALSTOR.setItem('myProject', JSON.stringify(itemListArr));
    console.log(JSON.parse(item));
    // LOCALSTOR.myProject.push(JSON.stringify(lastItem));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    // console.log(LOCALSTOR.myProject);

    
    

    const createItemFromLocalStorage = () => {
        // const d = createDefaultArrayList();
        const d = item;
        // d.forEach(obj => {
            const n = d.name;
            const dc = d.dateCreated;
            createItemHTML(n, dc);
        // })
    }

    if (LOCAL.length > 0) {
        //add to current project array in local storage 
        // return addListItemToArr(item); 
        
        return projectLocalStorage(projectName, item, clickCount);
        createItemFromLocalStorage();
    } else {
        addClickCount(clickCount, projectName);
        LOCALSTOR.setItem(`${projectName}`, JSON.stringify(item));
        createItemFromLocalStorage();
    }
    
    return LOCALSTOR;
}









//trying to remove this 
const createProjectLocalStorage = (projectName, item) => {
    const LOCALSTOR = window.localStorage;
    const SESSIONSTOR = window.sessionStorage;
    LOCALSTOR.setItem(`${projectName}`, JSON.stringify(item));
    // console.log(lastItem);
    // LOCALSTOR.myProject.push(JSON.stringify(lastItem));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    // console.log(LOCALSTOR.myProject);
    

    const createItemFromLocalStorage = () => {
        // const d = createDefaultArrayList();
        const d = item;
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
const loadSessionStoragePage = (projectName) => {
    // console.log(itemListArr); //array list is being reset every time page loads
    // const d = window.localStorage;
    // console.log(d);
    const i = JSON.parse(LOCAL);
    console.log(i);
    i.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;
        createItemHTML(n, dc);
    })
}

const createProjectFolder = (projectName) => {
    const currentP = document.querySelector('#current-p');
    const newProj = document.createElement('li');
    // newProj.classList.add('text');
    newProj.classList.add('projectName');
    newProj.textContent = projectName;
    currentP.appendChild(newProj);
}

const addClickCount = (clickCount, projectName) => {
    //if project name already exists inside storage, push
    //otherwise create
    console.log(SESSION);
    let data = SESSION.getItem(projectName);
    if (data) {
        console.log(SESSION.getItem(projectName));
    }
    return window.sessionStorage.setItem(`${projectName}`, clickCount);
}

// load in default page (using defaultarraylist)
const loadDefaultPage = () => {
    const d = createDefaultArrayList();
    d.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;
        createItemHTML(n, dc);
    })
}

//do i need a listitemarr
//each list item could go directly to local storage (under each project array)
//and that way on page reload, it wouldnt be updating a new listitem arr to replace the one in local storage 
