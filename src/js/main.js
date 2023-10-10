// *Hero section for shoes
const options = document.querySelectorAll('.option');
const bigShoes = document.getElementById('big-shoes');
const imgs = document.querySelectorAll('.img');
const border = document.querySelectorAll('.borda');
const bigShoesOriginal = bigShoes.getAttribute('src');

// *Hero section shoes options cards
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

// *Images to put when calling the function
const img1 = './assets/images/big-shoe1.png';
const img2 = './assets/images/big-shoe2.png';
const img3 = './assets/images/big-shoe3.png';

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



// *Change image when clicking the card
function changeImg(img) {
    for (let el of options) {
        for (let image of imgs) {
            if (el.getAttribute('src') !== image.getAttribute('src')) {
                bigShoes.setAttribute('src', img);
            }
        }
    }
}

option1.addEventListener('click', () => {
    changeImg(img1);
})
option2.addEventListener('click', () => {
    changeImg(img2);
})
option3.addEventListener('click', () => {
    changeImg(img3);
})
