// show the loader while getting the responce
const currenciesURL = "https://netology-slow-rest.herokuapp.com";
const items = document.getElementById("items");

function createItemCurrency (code, value){
    let item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
    <div class="item__code">
        ${code}
    </div>
    <div class="item__value">
        ${value}
    </div>
    <div class="item__currency">
        руб.
    </div>
    `;
    items.append(item);
}

function hideLoader(){
    let loader = document.querySelector("#loader");
    loader.classList.remove("loader_active");
}


const currencies = new XMLHttpRequest();
currencies.addEventListener("readystatechange", () =>{
    if (currencies.readyState == currencies.DONE){
        let valutes = JSON.parse(currencies.response).response["Valute"];
        hideLoader();
        Object.values(valutes).forEach((element) => {
            createItemCurrency(element["CharCode"], element["Value"]);
        })
    }
})

currencies.open("GET", currenciesURL, true);
currencies.send();
