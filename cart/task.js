
const cartProducts = document.querySelector(".cart__products");
cartProducts.innerHTML = (localStorage.getItem("cartProducts") !== null)? localStorage.getItem("cartProducts"): cartProducts.innerHTML;

const btnAdd = Array.from(document.querySelectorAll(".product__add"));

const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));



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

function addProductToCart(event){
    let product = event.target.closest(".product").cloneNode(false);
    product.className = "cart__product";
    let productOfID = findProductInCard(product.dataset.id)
    // if product isn't in cart
    if ( productOfID == undefined){
        let img = event.target.closest(".product").querySelector(".product__image").cloneNode(true);
        img.className = "cart__product-image"
        product.append(img);
        let count = event.target.parentElement.querySelector(".product__quantity-value");
        if (count !== null){
            let productCount = document.createElement("div");
            productCount.className = "cart__product-count";
            productCount.innerText = count.innerText;
            product.append(productCount);
            cartProducts.append(product);
        }
    } else {
        let value = productOfID.querySelector(".cart__product-count");
        let countAdd = event.target.parentElement.querySelector(".product__quantity-value").innerText;
        value.innerText = `${parseInt(value.innerText) + parseInt(countAdd)}`
    }
    localStorage.setItem("cartProducts", cartProducts.innerHTML);
    console.log(product);
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