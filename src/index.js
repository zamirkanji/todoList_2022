import './style.css';
import menuIcon from './img/menu.png';

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
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    newItemBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('test');
        inputNewItem.classList.toggle('display');
    })
})();