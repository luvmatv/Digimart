// Variables para manejar el carrito
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Abrir el carrito
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Cerrar el carrito
closeCart.onclick = () => {
    cart.classList.remove("active");
};


// CART WORKING JS
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}





//MAKING FUNCTION 
function ready(){
    //reamve item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Cambiar cantidad
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // Agregar al carrito
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
    }
}

// Remover un elemento del carrito
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Cambiar la cantidad de un producto en el carrito
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
//add to cart
//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.product-box');
    var title = shopProducts.querySelector(".product-title").innerText;
    var priceString = shopProducts.querySelector(".price").innerText;
    var price = parseFloat(priceString.replace(/[^\d.,]/g, "").replace(",", "."));
    var productImg = shopProducts.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);
}




// Agregar un producto al carrito (creación de elementos HTML)
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content") [0];
    var cartItemsNames = document.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("Ya tienes este producto en el carrito");
            return;
        }
    }

var cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
</div>
<!-- Remove -->
<i class='bx bxs-trash-alt cart-remove'></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0]
.addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0]
.addEventListener("change", quantityChanged);
}

// Actualizar el total del carrito
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseFloat(quantityElement.value);
        console.log("Price:", price);
        console.log("Quantity:", quantity);
        total += price * quantity;
        console.log("Total:", total);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
