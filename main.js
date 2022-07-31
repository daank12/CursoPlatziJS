const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const carritoLogo = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');
let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
let isCarritoMenuClosed = carritoMenu.classList.contains('inactive');


menuEmail.addEventListener('click', toggledesktopMenu);
burgerMenu.addEventListener('click', toggleburgerMenu);
carritoLogo.addEventListener('click', togglecarritoMenu);


function toggledesktopMenu() {
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}



function toggleburgerMenu() {
    console.log('click');
    if (!isCarritoMenuClosed) {
        carritoMenu.classList.toggle('inactive');
    } 
        mobileMenu.classList.toggle('inactive');
}


/*function togglecarritoMenu() {
    console.log('click');

    if(isMobileMenuOpen = true){

        carritoMenu.classList.toggle('inactive');

    }
}*/









/*doc<ument.getElementsByClassName("desktop-menu").addEventListener(click,AparecerMenu);{
function AparecerMenu(){
    Element.setAttribute ("display","");
*/
