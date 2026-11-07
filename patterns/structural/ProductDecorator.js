
// Base Decorator
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        if (typeof this.product.getPrice === 'function') {
            return this.product.getPrice();
        }
        return this.product.price;
    }

    getDescription() {
        if (typeof this.product.getDescription === 'function') {
            return this.product.getDescription();
        }
        return this.product.name;
    }
}

// Concrete Decorator for Gift Wrapping
class GiftWrapDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        return super.getPrice() + 5;
    }

    getDescription() {
        return super.getDescription() + ', gift wrapped';
    }
}

// Concrete Decorator for Extended Warranty
class ExtendedWarrantyDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        return super.getPrice() + 20;
    }

    getDescription() {
        return super.getDescription() + ', with extended warranty';
    }
}

// Base Product
class BaseProduct {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }

    getDescription() {
        return this._name;
    }
}

export {
    ProductDecorator,
    GiftWrapDecorator,
    ExtendedWarrantyDecorator,
    BaseProduct
};
