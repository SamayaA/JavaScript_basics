const cart = document.querySelector(".cart");
const cartProducts = document.querySelector(".cart__products");
const cartProductsList = (localStorage.getItem("cartProducts") !== null)? JSON.parse(localStorage.getItem("cartProducts")): [];

const btnAdd = Array.from(document.querySelectorAll(".product__add"));

const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));


// change quantity of product
function changeQuantity(event, number){
    let quantityValue = event.target.parentElement.querySelector(".product__quantity-value");
    if (quantityValue !== null){
        if (parseInt(quantityValue.textContent) <= 1 && number == -1){
            return 0
        }
        quantityValue.textContent = `${parseInt(quantityValue.textContent) + number}`;
    }
}

function findProductInCart(productId){
    let products = Array.from(cartProducts.children);
    let IDproduct = products.find((element) => element.dataset.id == productId);
    return IDproduct
}

function removeProductCart(event){
    let product = event.target.closest(".cart__product");
    cartProducts.removeChild(product);
    let productIndex = cartProductsList.indexOf(cartProductsList.find((item)=> item.id == product.dataset.id));
    cartProductsList.splice(productIndex, 1);
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsList));
    // cart display
    if (cartProducts.children.length > 0){
        cart.style.display = "block";
    } else {
        localStorage.removeItem("cartProducts");
        cart.style.display = "none";
    }
    event.stopPropagation();
    event.preventDefault();
}

function appendProduct(id, src, count){
    let product = document.createElement("div");
    product.setAttribute("class", "cart__product");
    product.setAttribute("data-id", id);
    
    let img = document.createElement("img");
    img.setAttribute("class", "cart__product-image");
    img.setAttribute("src", src)
    product.append(img);
    // product quantity
    let productCount = document.createElement("div");
    productCount.className = "cart__product-count";
    productCount.innerText = count;
    product.append(productCount);
    // remove sign
    let removeSign = document.createElement("a");
    removeSign.innerHTML = "&times";
    removeSign.href = "#";
    removeSign.className = "cart__product__remove";
    removeSign.addEventListener("click", removeProductCart)
    product.append(removeSign);
    cartProducts.append(product);
}

function addProductToCart(event){
    // cart display
    cart.style.display = "block";
    let id = event.target.closest(".product").dataset.id;
    let productOfID = findProductInCart(id);
    let count = event.target.closest(".product__quantity").querySelector(".product__quantity-value").innerText.trim();
    // if product isn't in cart
    if ( productOfID == undefined){
        let src = event.target.closest(".product").querySelector(".product__image").src;
        // produc creation
        appendProduct(id, src, count);
        let productInf = {};
        productInf["id"] = id;
        productInf["src"] = src;
        productInf["count"] = count;
        cartProductsList.push(productInf);
    } 
    else {
        let value = productOfID.querySelector(".cart__product-count");
        value.innerText = `${parseInt(value.innerText) + parseInt(count)}`;
        let productIndex = cartProductsList.indexOf(cartProductsList.find((item)=> item.id == id));
        cartProductsList[productIndex].count = `${parseInt(value.innerText)}`;      
    }
    count.innerText = '1';

    localStorage.setItem("cartProducts", JSON.stringify(cartProductsList));
}


// add products to cart from localStorage
cartProductsList.forEach(element => {
    appendProduct(element.id, element.src, element.count)
})

// display cart if it is not empty
if (cartProducts.children.length > 0){
    cart.style.display = "block";
}
productInc.forEach((element) => {
    element.addEventListener("click", (event) =>{
        changeQuantity(event, 1);
    })
})

productDec.forEach((element) => {
    element.addEventListener("click", (event) =>{
        changeQuantity(event, -1);
    })
})

btnAdd.forEach((element)=>{
    element.addEventListener("click", addProductToCart)
})