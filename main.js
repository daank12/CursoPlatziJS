const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const carritoLogo = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
let productsCard = document.querySelector('.product-card')
let productDetail = document.querySelector('.product-detail-aside')
        



menuEmail.addEventListener('click', toggledesktopMenu);
burgerMenu.addEventListener('click', toggleburgerMenu);
carritoLogo.addEventListener('click', togglecarritoMenu);



function toggledesktopMenu() {

    let isCarritoMenuClosed = carritoMenu.classList.contains('inactive');
    let isProductDetailClosed = productDetail.classList.contains('inactive');

    console.log('click');
    if(!isCarritoMenuClosed){

        carritoMenu.classList.add ('inactive');
    }
    if(!isProductDetailClosed){

        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleburgerMenu() {

    let isCarritoMenuClosed = carritoMenu.classList.contains('inactive');
    let isProductDetailClosed = productDetail.classList.contains('inactive');

    console.log('click');
    if(!isCarritoMenuClosed){

        carritoMenu.classList.add ('inactive');
    }
    if(!isProductDetailClosed){

        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoMenu() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    let isDesktopMenuClosed = menuEmail.classList.contains('inactive');

    let isProductDetailClosed = productDetail.classList.contains('inactive');

    console.log('click');
    
if(!isMobileMenuClosed){

    mobileMenu.classList.add ('inactive');

}
if(!isDesktopMenuClosed){

    desktopMenu.classList.add('inactive')
}
if(!isProductDetailClosed){

    productDetail.classList.add('inactive')
}
    carritoMenu.classList.toggle('inactive')
}

/*function toggleproductsCard() {
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
}*/

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

/*FUNCION MENU PRINCIPAL*/

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);

        
        productImg.addEventListener('click', openProductsDetail);
        
        function openProductsDetail() {
            console.log('click');

            let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
            let isDesktopMenuClosed = menuEmail.classList.contains('inactive');
            let isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

            if(!isMobileMenuClosed){
                mobileMenu.classList.add ('inactive');
            }
            if(!isDesktopMenuClosed){
                desktopMenu.classList.add('inactive')
            }
            if(!isCarritoMenuClosed){

                carritoMenu.classList.add ('inactive');
            }
            productDetail.classList.remove('inactive');
        }
       
    
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

/*FUNCION DETALLES DE PRODUCTO */
/*function detailsProduct(arr){
    for(product of productList){

        const productCardDetail = document.createElement('div');
        productCardDetail.classList.add('product-card-aside');
    
        const productImgDetail = document.createElement('img')
        productImgDetail.setAttribute('src', product.image);
    
    
        const productInfoDetail = document.createElement('div');
        productInfoDetail.classList.add('product-info-aside');
    
        const productInfoDivDetail = document.createElement('div');
    
        const productPriceDetail = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productNameDetail = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDivDetail.appendChild(productPrice);
        productInfoDivDetail.appendChild(productName)
    
        const productInfoFigureDetail = document.createElement('figure');
        const productImgCartDetail = document.createElement('img');
        productImgCartDetail.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigureDetail.appendChild(productImgCart);
        
        productInfoDetail.appendChild(productInfoDiv);
        productInfoDetail.appendChild(productInfoFigure);
    
        productCardDetail.appendChild(productImg);
        productCardDetail.appendChild(productInfo);
    
        cardsContainerDetail.appendChild(productCardDetail);
    }

    }
}
*/

/*<aside class="product-detail-aside inactive">




    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img class="img-info-producto" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info-aside">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        Add to cart
      </button>
    </div>
  </aside>*/

  let productDetailClose = document.querySelector('.product-detail-close');
  
  productDetailClose.addEventListener('click', closeProductsDetail);
 
  

function closeProductsDetail() {

    productDetail.classList.add('inactive');

}






/*doc<ument.getElementsByClassName("desktop-menu").addEventListener(click,AparecerMenu);{
function AparecerMenu(){
    Element.setAttribute ("display","");
*/
