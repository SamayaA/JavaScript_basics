// input 2 arguments 
// argv[2] = amount of items in catalog
// argv[3] = amount of items in basket
// for example write in terminal node web_store_structure.js 5 2

function addItemToBasket(basket, itemId) {
    itemPosition = basket.findIndex(item => item.itemId == itemId);
    if (itemPosition === -1) {
        itemInfo = {
            "itemId": itemId,
            "amount": 1,
        }
        basket.push(itemInfo);
    }
    else {
        basket[itemPosition].amount ++;
    }
    return basket;
}

function deleteItemFromBasket(basket, itemId) {
    itemPosition = basket.findIndex(item => item.itemId == itemId);
    if (itemPosition === -1) {
    }
    else {
        basket[itemPosition].amount --;
        if (basket[itemPosition].amount == 0){
            basket.splice(itemPosition, 1);
        }
    }
}

function clearBasket(basket) {
    basket.splice(0, basket.length)
}

function totalPriceAmount(basket, items) {
    total = {
        totalAmount: 0,
        totalSumm: 0,
    }
    for (i = 0; i < basket.length; i++){
        total.totalAmount += basket[i].amount;
        total.totalSumm += items[basket[i].itemId].price * basket[i].amount;
    }
    return total;
}

function main(){
    itemsAmount = process.argv[2]
    basketItemsAmount = process.argv[3]
    let items = {};
    // define proporties of items in catalog
    for (i = 1; i<=itemsAmount; i++) {
        items[i] = {}; 
        items[i].id = i;
        items[i].name = `Item ${i}`;
        items[i].description = `Description of item ${i}`;
        items[i].sizes = [i * 20, i * 10];
        items[i].price = i * 100;
        items[i].available = true;
    };
    // define the busket items
    let basket = [];
    for (i = 0; i<=2; i++) {
        addItemToBasket(basket, i+1);
    };
    // delete 1 position of itemId 1 
    deleteItemFromBasket(basket, 1);
    // total amount of items and price of basket
    console.log(totalPriceAmount(basket, items));
    // delete all items of basket
    clearBasket(basket);
}

main();



