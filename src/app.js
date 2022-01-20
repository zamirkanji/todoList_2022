const itemListArr = [];

const getDate = () => {
    const myDate = new Date().toLocaleDateString();
    return myDate;
}

class ListItem {
    constructor(name, notes, dateCreated) {
        this.name = name;
        this.notes = notes;
        this.dateCreated = dateCreated
    }
    // get dateCreated () {
    //     return this.dateCreated;
    // }
}

export {
    getDate,
    ListItem
}