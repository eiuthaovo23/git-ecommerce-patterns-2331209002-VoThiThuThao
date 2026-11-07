import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        // Step 1: Check product stock
        const isInStock = this.inventoryService.checkStock(
            orderDetails.productIds
        );

        if (!isInStock) {
            console.log("Checkout failed: Product is out of stock.");
            return false;
        }

        // Step 2: Process payment
        const isPaymentSuccessful = this.paymentService.processPayment(
            orderDetails.userId,
            orderDetails.amount
        );

        if (!isPaymentSuccessful) {
            console.log("Checkout failed: Payment unsuccessful.");
            return false;
        }

        // Step 3: Arrange shipping
        const shippingResult = this.shippingService.arrangeShipping(
            orderDetails.userId,
            orderDetails.shippingInfo
        );

        if (!shippingResult) {
            console.log("Checkout failed: Shipping unsuccessful.");
            return false;
        }

        console.log("Order completed successfully!");
        console.log(`Tracking ID: ${shippingResult.trackingId}`);

        return true;
    }
}

export { CheckoutFacade };