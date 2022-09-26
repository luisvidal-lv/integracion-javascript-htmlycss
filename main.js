const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoicon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingcartcontainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoicon.addEventListener('click', toggleCarritoShoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closedProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingcartcontainer.classList.contains('inactive')
    if (!isShoppingCartContainerClosed) {
        shoppingcartcontainer.classList.add('inactive');
    };
  
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingcartcontainer.classList.contains('inactive')
    if (!isShoppingCartContainerClosed) {
        shoppingcartcontainer.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
    closedProductDetailAside();
}

function toggleCarritoShoppingCartContainer () {
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive');
    };

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    };
    shoppingcartcontainer.classList.toggle('inactive')
    if (!isProductDetailClosed)
        productDetailContainer.classList.add('inactive')
}

function openProductDetailAside () {
    shoppingcartcontainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closedProductDetailAside () {
    productDetailContainer.classList.add('inactive')   
}
const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
    name: 'Casco',
    price: 40,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
    name: 'Tenis',
    price: 89,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
    name: 'Bote de Agua',
    price: 15,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


/* <div class="product-card">
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
</div> */

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const producPrice = document.createElement('p');
        producPrice.innerText = '$' + product.price;
        const producName = document.createElement('p');
        producName.innerText = product.name;
    
        productInfoDiv.appendChild(producPrice);
        productInfoDiv.appendChild(producName);
    
        const productInfoFigure = document.createElement('figure');
        const imgCarrito = document.createElement('img')
        imgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(imgCarrito);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);