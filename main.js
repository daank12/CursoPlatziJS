const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const carritoLogo = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggledesktopMenu);
burgerMenu.addEventListener('click', toggleburgerMenu);
carritoLogo.addEventListener('click', togglecarritoMenu);


function toggledesktopMenu() {

    let isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    console.log('click');
    if(!isCarritoMenuClosed){

        carritoMenu.classList.add ('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleburgerMenu() {

    let isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    console.log('click');
    if(!isCarritoMenuClosed){

        carritoMenu.classList.add ('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoMenu() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    let isDesktopMenuClosed = menuEmail.classList.contains('inactive')

    console.log('click');
    
if(!isMobileMenuClosed){

    mobileMenu.classList.add ('inactive');

}
if(!isDesktopMenuClosed){

    desktopMenu.classList.add('inactive')
}
    carritoMenu.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'bike',
    price: 20 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'pantalla',
    price: 200 ,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pc',
    price: 500 ,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pc',
    price: 500 ,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pc',
    price: 500 ,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pc',
    price: 500 ,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pc',
    price: 500 ,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'bike',
    price: 20 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
<div>
 <p>$120,00</p>
<p>Bike</p>
</div>
 <figure>
<img src="./icons/bt_add_to_cart.svg" alt="">
 </figure>
 </div>
</div>
*/

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);








/*doc<ument.getElementsByClassName("desktop-menu").addEventListener(click,AparecerMenu);{
function AparecerMenu(){
    Element.setAttribute ("display","");
*/
