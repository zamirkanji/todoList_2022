const itemListArr = [];

const clearStorage = () => {
    return () => {
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
    
}

//remove display (none) from element 
const removeDisplayNone = (d) => {
    return d.classList.remove('display');
}

//add display (none) to element 
const addDisplayNone = (d) => {
    return d.classList.add('display');
}

//clear all list items from the DOM
const clearAllItemsDOM = (ol) => {
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
    return;
}

const getDate = () => {
    const myDate = new Date().toLocaleDateString();
    return myDate;
}
const getDateAndTime = () => {
    const getDate = () => {
        const myDate = new Date().toLocaleDateString();
        return myDate;
    }
    const getTime = () => {
        const getTime = new Date().toLocaleTimeString();
        return getTime;
    }
    return {
        getDate,
        getTime
    }
}


const displayHandler = () => {
    const inputNewItem = document.querySelector('#input-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    const labelNewItem = document.querySelector('.label-new-item');
    const inputItemContainer = document.querySelector('.input-item-container');
//remove display (none) from element 
    const removeDisplayNone = (d) => {
        return d.classList.remove('display');
    }

//add display (none) to element 
    const addDisplayNone = (d) => {
        return d.classList.add('display');
    }
//add back display NONE    
    const dontShowForm = () => {
        addDisplayNone(inputItemContainer);
        return;
    }
//remove display NONE
    const showForm = () => {
        removeDisplayNone(inputItemContainer);
    }

    return {
        removeDisplayNone,
        addDisplayNone,
        dontShowForm,
        showForm
    }
}


class ListItem {
    constructor(name, dateCreated, timeStamp) {
        this.name = name;
        this.notes = 'test';
        this.dateCreated = dateCreated
        this.checked = false;
        this.timeStamp = timeStamp;
    }
    getName() {
        return this.name;
    }
}

console.log(ListItem.prototype);

class DOMItem {
    constructor(type) {
        this.type = type;
    }
}

export {
    itemListArr,
    getDate,
    ListItem,
    getDateAndTime,
    displayHandler,
    clearStorage,
    removeDisplayNone,
    addDisplayNone,
    clearAllItemsDOM
}