// *Hamburger menu variables
const hamburgerMenu = document.getElementById('menu');
const navbarList = document.getElementById('mobile');

// *Hamburger menu open and close
const menuClose = './assets/icons/hamburger.svg';
const menuOpen = './assets/icons/hamburger-open.svg';

// *Click event on hamburger menu image
hamburgerMenu.addEventListener('click', () => {
    navbarList.classList.toggle('scale-x-0');
    let teste = hamburgerMenu.getAttribute('src') === menuClose ? hamburgerMenu.setAttribute('src', menuOpen) : hamburgerMenu.setAttribute('src', menuClose);
})
