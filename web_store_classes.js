
// для хранения данных о товаре
class Good {
    constructor(id, name, description, sizes, price, available){
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable(available){
        this.available = available;
    }

}

// для хранения каталога товаров
class GoodsList {
    #goods = [];
    constructor(goods, filterName, sortPrice, sortDir){
        if (goods.constructor.name === "Array"){
            this.#goods = goods;
        }
        else if (goods.constructor.name === "Good"){
            this.#goods = [goods];
        }
        else {
            this.#goods = [];
        };
        // this.filter =((good) => good.name.match(/`${filterName}`/g));
        this.filter =/`${filterName}`/g;
        this.sortPrice = sortPrice;
        // признак направления сортировки по полю Price (true - по возрастанию, false - по убыванию)
        this.sortDir = sortDir;
    }

    get list(){
        this.availableGoods = this.#goods.filter((good) => good.available == true);
        this.filteredGoods = this.availableGoods.filter(this.filter.test(good.name));
        sortPrice = this.sortPrice;
        sortDir = this.sortDir
        this.sortedGoods = this.filteredGoods.sort((sortPrice, sortDir) => sortPrice-sortDir)
        return this.sortedGoods;
    }

    add(item){
        if (!(this.#goods.includes(item.id))){
        this.#goods.push(item);
        }
    }

    remove(itemId){
        itemPosition = this.#goods.findIndex(item => item.id == itemId);
        if (itemPosition === -1) {
        }
        else {
            this.#goods.splice(itemPosition, 1);
        }
    }
}

// для хранения данных о товаре в корзине
class BasketGood extends Good {
    constructor(item, amount=1){
        super(item.id, item.name, item.description, item.sizes, item.price, item.available);
        this.amount = amount;
    }
}

// для хранения данных о корзине товаров
class Basket {
    constructor(goods){
        // goods is instance of BasketGood
        if (goods.constructor.name === "Array"){
            this.goods = goods;
        }
        else if (goods.constructor.name === "BasketGood"){
            this.goods = [goods];
        }
        else {
            this.goods = [];
        };   
    };

    get totalAmount(){
        this.result = 0
        for (i = 0; i < this.goods.length; i++){
            this.result += this.goods[i].amount;
        }
        return this.result;
    }   

    get totalPrice(){
        this.result = 0
        for (i = 0; i < this.goods.length; i++){
            this.result += this.goods[i].price * this.goods[i].amount;
        }
        return this.result;
    }

    add(good, amount) {
        itemPosition = this.goods.findIndex(item => goods.id == good.id);
        if (itemPosition === -1) {
            this.goods.push(good);
            this.goods[this.goods.length-1].amount = amount;
        }
        else {
            this.goods[itemPosition].amount += amount;
        }
    }
    
    remove(good, amount) {
        itemPosition = this.goods.findIndex(item => goods.id == good.id);
        if (itemPosition === -1) {
        }
        else {
            this.goods[itemPosition].amount -= amount;
            if (this.goods[itemPosition].amount == 0){
                this.goods.splice(itemPosition, 1);
            }
        }
    }
    
    clearBasket() {
        this.goods.splice(0, this.goods.length)
    }

    // Удаляет из корзины товары, имеющие признак available === false
    removeUnavailable(){
        this.goods = this.goods.filter((good)=> good.available === true);
    }
}

function main(){
    items = []
    for (i = 1; i<=5; i++) { 
        items.push(new Good(i, `Item ${i}`, `Description of item ${i}`, [i * 20, i * 10], i * 100, true)); 
    };
    // console.log(items);
    goodlist = new GoodsList(items, 'Item', true,true); 
    // console.log(goodlist.list()); //good is not defined
    basketGood = [];
    for (i = 0; i<=4; i++) { 
        basketGood.push(new BasketGood(items[i], i)); 
    };
    // console.log(basketGood);
    basket = new Basket(basketGood);
    console.log(`total amount of items = ${basket.totalAmount}`);
    console.log(`total price of basket = ${basket.totalPrice}`);
    
}

main()