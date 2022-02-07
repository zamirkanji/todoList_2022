import './style.css';
import menuIcon from './img/menu.png';
import expand from './img/noun-expand-1181747.png';
import { mdiChevronDown, mdiConsoleLine, mdiControllerClassic, mdiWindowShutter } from '@mdi/js';
import { getDate, itemListArr, ListItem } from './app.js';
import createDefaultArrayList from './defaultProject';

const LOCAL = window.localStorage;
const SESSION = window.sessionStorage;

//LOAD PAGE
const DOMLoaded = (() => {
    window.addEventListener('DOMContentLoaded', (e) => {
        // window.localStorage.clear();
        // window.sessionStorage.clear();

        //get currentl, latest project from local storage and pass in projectname to loadsession
        let projName = LOCAL.key(0);

        //check for projectName from sidetab (whatever project is highlighted)
        window.localStorage.length === 0 ? loadDefaultPage() : loadSessionStoragePage(projName);
    });
})();

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
    checkboxLabel.id = 'item-checkbox';
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
    const span = document.createElement('span');
    newListItem.appendChild(span);
    newListItem.classList.add('list-item');
    span.classList.add('item-text');
    span.classList.add('text');
    span.textContent = n;


    
    //add item options container
    newListItem.appendChild(createNewItemOptionsContainer);
    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);

    //log storage
    // console.log(LOCAL);

    //return delete btn, expand btn listener once item is created 
    return () => {
        console.log('test');
        const a = deleteBtnListener();
        const b = expandBtnListener();
        // const c = itemEditable();
        return a && b;
    }
}

//make item editable
const itemEditable = () => {
    const item = document.querySelector('.item-text');
    item.contentEditable = true;
    item.addEventListener('dblclick', () => {
        if (contentEditable) {
            console.log('item being edited');
            //remove span
            //create input
            //
        }
    })
}

//event listener to delete item (called after item is created)
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
        console.log('delete btn clicked');
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

//expand btn listener (called after item is created)
const expandBtnListener = () => {
    const expandIcon = document.querySelector('.expand-icon');
    const goShoppingItemTest = document.querySelector('#go-shopping');
    const itemOptions = document.querySelector('.item-options-container');
    const itemText = document.querySelector('#item-text');
    expandIcon.addEventListener('click', (e) => {
        console.log(e, e.target);
        e.preventDefault();
        // goShoppingItemTest.classList.remove('list-item');
        goShoppingItemTest.classList.toggle('expand-container');
        // itemOptions.classList.toggle('expand-container');

        const itemwrapper = document.createElement('div');
        itemwrapper.classList.add('list-item');
        itemwrapper.appendChild(itemText);
        itemwrapper.appendChild(itemOptions);

        goShoppingItemTest.appendChild(itemwrapper);
        

        const details = document.createElement('div');
        details.classList.add('details-container');
        goShoppingItemTest.appendChild(details);  
    })
};

//get name and date from items and call createItemHTML()
const getNameAndDate = (arr) => {
    arr.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;
        const createItem = createItemHTML(n, dc);
        return createItem();
    })
}

//listen for form submission to add each item 
const formSubmission = (clickCount, projectName)=> {
    const form = document.querySelector('.form-main');
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
        //check if LOCAL STORAGE is empty or not 
        return projectLocalStorage(clickCount, projectName, item);
    })
};

//check local storage to see if project already exists
const checkLocalStorage = (clickCount, projectName, item) => {
    const projectExists = LOCAL.length > 0;
    return projectExists ? true : false;
}

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

//new list item btn listener 
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
        
        e.preventDefault();
        //remove display none from input form items
        let projectName;
        const projectExists = checkLocalStorage();
        if (projectExists) {
            let getClickCount = SESSION.getItem('hello');
            getClickCount++;
            console.log(getClickCount);
        } else {
            clickCount++;
            console.log(clickCount);
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
            const d = deleteChildElements(ol);
            d();

            addClickCount(clickCount, projectName);
        }
    
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);

        return formSubmission(clickCount, projectName);
    })

    
})();

//delete all child elements function
const deleteChildElements = (parentEl) => {
    return () => {
        if (true) {
            while (parentEl.firstChild) {
                parentEl.removeChild(parentEl.firstChild);
            }   
            //remove from arr/local storage
        }
    }
}

//the value of the key value pair is the object array that is created for each project (list of items)
const projectLocalStorage = (clickCount, projectName, item) => {
    const localStorageItemList = [];
    //FIND PROJECT NAME AND PUSH LAST ITEM INTO IT 

    // LOCALSTOR.setItem('myProject', JSON.stringify(itemListArr));
    // console.log(JSON.parse(item));
    // LOCALSTOR.myProject.push(JSON.stringify(lastItem));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    // console.log(LOCALSTOR.myProject);
    // LOCALSTOR.setItem(`${projectName}`, JSON.stringify(item));
    // console.log(lastItem);
    // LOCALSTOR.myProject.push(JSON.stringify(lastItem));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    // console.log(LOCALSTOR.myProject);

    const projectExists = checkLocalStorage();
    console.log(projectExists);

    const createItemFromLocalStorage = (item) => {
        // const d = createDefaultArrayList();
        const d = item;
            const n = d.name;
            const dc = d.dateCreated;
            return createItemHTML(n, dc);
    }
    
    if (projectExists) {
        console.log(item);
        //add to current project array in local storage 
        // return addListItemToArr(item); 
        // const proj = LOCAL.getItem(`${projectName}`);
        let proj = JSON.parse(LOCAL.getItem('hello'));
        // JSON.parse(proj);
        console.log(proj);
        console.log(item);
        console.log(Array.isArray(proj));
        proj.push(JSON.stringify(item));
        
        createItemFromLocalStorage(item);
        // return projectLocalStorage(projectName, item, clickCount);
    } else {
        addClickCount(clickCount, projectName);
        
        LOCAL.setItem(`${projectName}`, JSON.stringify([item]));
        createItemFromLocalStorage(item);
    }
    
    
    return LOCAL;
}

//JSON.parse item list arr, and create html element for each item in LOCAL storage 
const loadSessionStoragePage = (projName) => {
    document.querySelector('#projectNameHeader').textContent = projName;
    //create folder in sidebar on page load
    //will need to show all projects in sidebar
    createProjectFolder(projName);

    let i = LOCAL.getItem(`${projName}`);
    i = JSON.parse(i);
    return getNameAndDate(i);
}

//create project folder in sidebar when new project is created
const createProjectFolder = (projectName) => {
    const currentP = document.querySelector('#current-p');
    const newProj = document.createElement('li');
    // newProj.classList.add('text');
    newProj.classList.add('projectName');
    newProj.textContent = projectName;
    currentP.appendChild(newProj);
}

//add click count to session storage to track
const addClickCount = (clickCount, projectName) => {
    //if project name already exists inside storage, push
    //otherwise create
    let data = SESSION.getItem(projectName);
    if (data) {
        console.log(SESSION.getItem(projectName));
    }
    console.log(SESSION);
    return window.sessionStorage.setItem(`${projectName}`, clickCount);
}

// load in default page (using defaultarraylist)
const loadDefaultPage = () => {
    const d = createDefaultArrayList();
    return getNameAndDate(d);
}