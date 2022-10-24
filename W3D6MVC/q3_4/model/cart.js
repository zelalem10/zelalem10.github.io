let products = [];
class Cart {
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    add() {
        products.push(this);
    }
    getAll() {
        return products;
    }
}
module.exports = Cart;