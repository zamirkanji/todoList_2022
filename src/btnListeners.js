import { mdiConsoleNetwork } from "@mdi/js";
import { checkLocalStorage, clearAllItemsDOM } from ".";

//event listener to delete item (called after item is created)
const deleteBtnListener = (projectName = 'myProject') => {
    console.log(projectName);
    const orderedList = document.querySelector('.ordered-item-list');
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    

    // for (let i = 0; i < listItemDeleteBtns.length; i++) {
    //     // console.log(i);
    //     const btnIndex = i;
    // }

    // for(let j = 0; j < itemListArr.length; j++) {
    //     // console.log(j);
    //     const listItemIndex = j; 
    // }

    orderedList.addEventListener('click', (e) => {
        // console.log(e.target);
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log(e.target);
        const parent = e.target.parentNode;
        if (e.target.classList.contains('delete-icon')) {
            console.log('delete icon');
            const answer = confirm('are you sure you want to delete this item?');
            if (answer) {
                console.log(e.target);
            }
        } else {
            return;
        }
        
    }, false);

    // listItemDeleteBtns.forEach(btn => {
    //     btn.addEventListener('click', e => {
    //         const listItem = e.target.parentNode.parentNode.parentNode.parentNode;
    //         const confirmAnswer = confirm('are you sure you want to delete this item?');
    //         if (confirmAnswer) {
    //             listItem.remove();
    //         } 
    //     })
    // })
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
        
    })
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
    })
};

const deleteAllProjects = () => {
    //going to delete from local storage
}



const ifChecked = (e) => {
    const dateCheckedOff = new Date().toLocaleDateString();
    const checkBoxIsChecked = document.querySelector('#item-checkbox');
    checkBoxIsChecked.addEventListener('change', e => {
        //this input should be attached to the list item somehow
        //could make the list item the same input
        if (e.target.checked) {
            console.log('is checked');
            //add datecheckedoff to listItem object
        }
    })
}

export {
    deleteBtnListener,
    expandBtnListener,
    clearAllBtnListener,
    ifChecked
}