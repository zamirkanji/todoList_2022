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
}

export {
    getDate,
    ListItem
}