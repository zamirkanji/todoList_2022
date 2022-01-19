import './style.css';
import menuIcon from './img/menu.png';

const menuEventListener = (() => {
    const menuLogo = document.querySelector('.menu-icon');
    const mainSidebar = document.querySelector('.main-sidebar');
    menuLogo.addEventListener('click', () => {
        console.log('test');
        mainSidebar.classList.toggle('display');
    })
})();