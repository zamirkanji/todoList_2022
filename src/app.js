const itemListArr = [];

const getDate = () => {
    const myDate = new Date().toLocaleDateString();
    return myDate;
}

class ListItem {
    constructor(name, dateCreated) {
        this.name = name;
        this.notes = 'test';
        this.dateCreated = dateCreated
    }
    // get dateCreated () {
    //     return this.dateCreated;
    // }
}

class DOMItem {
    constructor(type) {
        this.type = type;
    }
}

export {
    itemListArr,
    getDate,
    ListItem
}