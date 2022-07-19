const cart = document.querySelector(".cart");

const cartProducts = document.querySelector(".cart__products");
cartProducts.innerHTML = (localStorage.getItem("cartProducts") !== null)? localStorage.getItem("cartProducts"): cartProducts.innerHTML;

const btnAdd = Array.from(document.querySelectorAll(".product__add"));

const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));

// remove signs from localStorage
const removeSigns = Array.from(document.querySelectorAll(".cart__product__remove"));
removeSigns.forEach((element)=> {
    element.addEventListener("click", removeProductCart)
})

// display cart if it is not empty
if (cartProducts.children.length > 0){
    cart.style.display = "block";
}

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

function findProductInCard(productId){
    let products = Array.from(cartProducts.children);
    let IDproduct = products.filter((element)=> {return element.dataset.id == productId});
    return (IDproduct[0])
}

function removeProductCart(event){
    cartProducts.removeChild(event.target.closest(".cart__product"));
    localStorage.setItem("cartProducts", cartProducts.innerHTML);
    // cart display
    cart.style.display = (cartProducts.children.count > 0)? "block": "none";
    event.stopPropagation();
    event.preventDefault();
}

function addProductToCart(event){
    // cart display
    cart.style.display = "block";
    // produc creation
    let product = event.target.closest(".product").cloneNode(false);
    product.className = "cart__product";
    let productOfID = findProductInCard(product.dataset.id)
    let count = event.target.parentElement.querySelector(".product__quantity-value");
    // if product isn't in cart
    if ( productOfID == undefined){
        let img = event.target.closest(".product").querySelector(".product__image").cloneNode(true);
        img.className = "cart__product-image"
        product.append(img);

        if (count !== null){
            // product quantity
            let productCount = document.createElement("div");
            productCount.className = "cart__product-count";
            productCount.innerText = count.innerText;
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
    } else {
        let value = productOfID.querySelector(".cart__product-count");
        value.innerText = `${parseInt(value.innerText) + parseInt(count.innerText)}`
    }
    count.innerText = '1';
    localStorage.setItem("cartProducts", cartProducts.innerHTML);
    // console.log(product);
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