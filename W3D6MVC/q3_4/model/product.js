products=[];
class Product{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    static getAllProducts(){
        return products;
    }

    static getById(id){
        return products.filter(p => p.id == id);
    }

}

hp = new Product(1,"Laptop",10,4);
samsung = new Product(2,"mobile",30,2);
suit = new Product(3,"suit",2,5);
car = new Product(4,"car",1,4);
screen = new Product(5,"monitor",1,4);

products = [hp,samsung,suit,car,screen];

module.exports = Product;