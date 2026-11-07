
// Singleton Pattern
// Store the single instance
let instance = null;

class CartService {
    constructor() {
        // Check if an instance already exists
        if (instance) {
            return instance;
        }

        // Initialize the cart
        this.products = [];

        // Save this instance
        instance = this;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    }

    getProducts() {
        return this.products;
    }
}

export { CartService };
