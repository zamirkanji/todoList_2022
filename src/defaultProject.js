import { ListItem, getDate } from "./app"

const createDefaultArrayList = () => {
    const one = new ListItem('Do the dishes', 'On time!', getDate());
    const two = new ListItem('Change car\'s oil', 'On time!', getDate());
    const three = new ListItem('Walk the Dog', 'On time!', getDate());
    const four = new ListItem('Fold the laundry', 'On time!', getDate());
    const five = new ListItem('Call the bank', 'On time!', getDate());

    const defaultArrayList = [
        one,
        two, 
        three, 
        four,
        five
    ]
    return defaultArrayList;
}

export default createDefaultArrayList;