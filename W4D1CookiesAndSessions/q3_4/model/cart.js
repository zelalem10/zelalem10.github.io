let cart = null;
class Cart {

   static add(product) {

        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }

        const existingProductIndex = cart.products.findIndex(p => p.id == product.id); // to check product is existing in cart
        if (existingProductIndex >= 0) { // exist in cart already
            const exsitingProduct = cart.products[existingProductIndex];
            exsitingProduct.quantity += 1;
        } else { //not exist
            product.quantity = 1;
            cart.products.push(product);
        }

        cart.totalPrice += product.price;
    }
    static  getAll() {
        return cart;
    }
}
module.exports = Cart;