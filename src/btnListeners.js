import { mdiConsoleNetwork } from "@mdi/js";
import { checkLocalStorage, clearAllItemsDOM } from ".";
import { getDateAndTime, ListItem } from "./app";

const dateAndTime = getDateAndTime();


//test this (Event delegation)
const documentEventListener = (() => {
    document.addEventListener('click', e => {
        if (e.target.id = 'delete-item') {
            console.log('delete item test');
        } else {
            return
        }
        if (e.target.id = 'item-checkbox') {
            console.log('item checkbox test');
        } else {
            return
        }
    }, false)
    return;
})();

//event listener to delete item (called after item is created)
const deleteBtnListener = (projectName = 'myProject') => {
    const orderedList = document.querySelector('.ordered-item-list');
    // const itemOptionsContainer = document.querySelector('.items-options-container');
    const itemDeleteBtn = document.querySelector('.item-delete-btn');
    const itemDeleteBtnsAll = document.querySelectorAll('.item-delete-btn');
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    const currentProjectName = window.localStorage.key(0);
    const currentProjObject = window.localStorage.getItem(currentProjectName);

    console.log(itemDeleteBtnsAll);

    itemDeleteBtnsAll.forEach(b => {
        b.addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            // current 
            console.log(e.target.parentNode);
            
            if (e.target.classList.contains('delete-icon')) {
                const answer = confirm('are you sure you want to delete this item?');
                console.log(answer);
                if (answer === true) {
                    const listItemText = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[2].value;
                    let currentProjectArrayFromStorage = window.localStorage.getItem(currentProjectName);
                    currentProjectArrayFromStorage = JSON.parse(currentProjectArrayFromStorage);
                    let item; 
        
                    currentProjectArrayFromStorage = currentProjectArrayFromStorage.filter(o => {
                        console.log(o.name);
                        return o.name != listItemText;
                    })
                    console.log(currentProjectArrayFromStorage);
                }
                if (answer == false) {
                    return;
                } 
            } else {
                return;
            }
        }, false);
    })
};


const clearAllBtnListener = (() => {
    //once cleared, start new project?
    //or just a n
    const clearAllBtn = document.getElementById('clear-all-items-btn');
    clearAllBtn.addEventListener('click', () => {
        //get current project (Whatever is clicked on sidebar)
        const getCurrentProjectName = window.localStorage.key(0);
        console.log('delete btn clicked');
        const ol = document.querySelector('.ordered-item-list');
        const confirmDeleteAll = confirm('Would you like to clear all items?');
        if (confirmDeleteAll) {
            clearAllItemsDOM(ol);
            //remove from arr/local storage
            // console.log(projectName);
            LOCAL.removeItem(getCurrentProjectName);
        } else {
            return;
        }
        //would you like to clear all items and start over or delete project
        //delete all children under ordered item list 
        
    }, false);
})();



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
    }, false);
};

const deleteAllProjects = () => {
    //going to delete from local storage
}



const ifChecked = (e) => {
    //get item that corresponds with the checkbox 
    //change checked: false to true in local storage
    //when page is loaded and DOM item is created, make sure checkbox stays 
    const timeStamp = dateAndTime.getTime();
    console.log(timeStamp);
    
    const checkboxes = document.querySelectorAll('input[type=checkbox');
    // const allCheckBoxes = document.querySelectorAll('#item-checkbox');
    // console.log(checkbox);
    // console.log(allCheckBoxes);
    checkboxes.forEach(box => {
        box.addEventListener('change', (e) => {
            console.log(e.currentTarget);
            console.log('change');
            //this input should be attached to the list item somehow
            //could make the list item the same input
            if (e.currentTarget.checked) {
                console.log('is checked');
                //add datecheckedoff to listItem object
                return;
            } else {
                return;
            }
        }, false)
    })
};

// const callListeners = () => {
//     const a = deleteBtnListener();
//     // const b = expandBtnListener();
//     const c = ifChecked();
//     return () => {
//         a, 
//         c
//     }
// }
// const callListener = callListeners();
// callListener();


export {
    deleteBtnListener,
    expandBtnListener,
    clearAllBtnListener,
    ifChecked,
    dateAndTime
}