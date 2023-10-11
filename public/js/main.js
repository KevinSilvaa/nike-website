// *Hero section for shoes
const options = document.querySelectorAll('.option');
const bigShoes = document.getElementById('big-shoes');
const imgs = document.querySelectorAll('.img');
const borderCard = document.querySelectorAll('.borda');
const bigShoesOriginal = bigShoes.getAttribute('src');

// *Hero section shoes options cards
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

// *Images to put when calling the function
const img1 = '../assets/images/big-shoe1.png';
const img2 = '../assets/images/big-shoe2.png';
const img3 = '../assets/images/big-shoe3.png';

// *Hamburger menu variables
const hamburgerMenu = document.getElementById('menu');
const navbarList = document.getElementById('mobile');

// *Hamburger menu open and close
const menuClose = '../assets/icons/hamburger.svg';
const menuOpen = '../assets/icons/hamburger-open.svg';

// *Click event on hamburger menu image
hamburgerMenu.addEventListener('click', () => {
    navbarList.classList.toggle('scale-x-0');
    let menu = hamburgerMenu.getAttribute('src') === menuClose ? hamburgerMenu.setAttribute('src', menuOpen) : hamburgerMenu.setAttribute('src', menuClose);
})

// *Change image and select border for respective card
function changeImg(img) {
    options.forEach(el => {
        imgs.forEach(image => {
            if (el.getAttribute('src') !== image.getAttribute('src')) {
                bigShoes.setAttribute('src', img);
            }
        });
    })
}

function changeBorder() {
    options.forEach((element, index) => {
        borderCard.forEach((border, indexBorder) => {
            element.addEventListener('click', () => {
                index === indexBorder ? border.classList.replace('border-transparent', 'border-coral-red') : border.classList.replace('border-coral-red', 'border-transparent');
            })
        });
    });
}

// *Each card event listener
option1.addEventListener('mousedown', () => {
    changeImg(img1);
    changeBorder();
})
option2.addEventListener('mousedown', () => {
    changeImg(img2);
    changeBorder();
})
option3.addEventListener('mousedown', () => {
    changeImg(img3);
    changeBorder();
})
