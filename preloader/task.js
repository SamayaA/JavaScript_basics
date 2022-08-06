// show the loader while getting the responce
const currenciesURL = "https://netology-slow-rest.herokuapp.com";
const items = document.getElementById("items");

function createItemCurrency (code, value){
    let item = document.createElement("div");
    item.className = "item";

    let itemCode = document.createElement("div");
    itemCode.className = "item__code";
    itemCode.textContent = code;

    let itemValue = document.createElement("div");
    itemValue.className = "item__value";
    itemValue.textContent = value;
    
    let itemCurrency = document.createElement("div");
    itemValue.className = "item__currency";
    itemValue.textContent = 'руб.';
    item.append(itemCode, itemValue, itemCurrency);

    items.append(item);
}

function hideLoader(){
    let loader = document.querySelector("#loader");
    loader.classList.remove("loader_active");
}


const currencies = new XMLHttpRequest();
currencies.addEventListener("readystatechange", () =>{
    if (currencies.readyState == currencies.DONE && currencies.status == 200){
        let valutes = JSON.parse(currencies.response).response["Valute"];
        hideLoader();
        Object.values(valutes).forEach((element) => {
            createItemCurrency(element["CharCode"], element["Value"]);
        })
    }
})

currencies.open("GET", currenciesURL, true);
currencies.send();
