/*
Create a program to create transaction

● Product Class
    ○ Properties
        ■ Name
        ■ Price

● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty   
    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data
*/

// This class represents a product that can be added to a transaction.
// membuat class sebagai template untuk object baru dengan property yang sama
class Product {
    name: string = ""
    price: number = 0

    // When a new Product object is created, the constructor is called to set the name and price of the product.
    constructor (name: string, price: number) {
        this.name = name
        this.price = price
    }
}

// This class is responsible for managing the shopping cart, calculating the total, and finalizing the transaction.
class Transaction {
    // This is an array that stores each product and the quantity (qty) added to the cart. 
    // Each entry in the array is an object with two fields:
    private cart: {product: Product, qty: number}[] = [] // product: The Product object, qty: The quantity of the product added.
    // This keeps track of the total price for the entire transaction.
    private totalPrice: number = 0

    // This method adds a product and its quantity to the cart and updates the total price.
    addToCart(product: Product, qty: number): void { // product: The product object being added, qty: The quantity of the product.
        this.cart.push({ product, qty}) // The product and its quantity are added to the cart array
        this.totalPrice += product.price * qty // The total price is updated by multiplying the product’s price by the quantity and adding it to this.total.    
    }

    // This method returns the current total price of all products in the cart.
    showTotalPrice(): number {
        return this.totalPrice // The total price stored in this.total
    }

    // Finalizes the transaction by returning all the products and their quantities, along with the total price.
    checkOut(): { product: { name: string, price: number, qty: number }[], totalPrice: number} {
        const transactionData = { // object
            // A list of all products in the cart. 
            // It uses map to transform each cart item into an object containing the product’s name, price, and quantity.
            product: this.cart.map(item => ({
                name: item.product.name,
                price: item.product.price,
                qty: item.qty
            })),
            // The current total price
            totalPrice: this.totalPrice
        }

        // After returning the transaction data, the cart is cleared (this.cart = []) 
        // and the total is reset (this.total = 0), preparing for a new transaction.
        this.cart = []
        this.totalPrice = 0

        return transactionData
    }
}

// example -----

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

const transaction = new Transaction();
    transaction.addToCart(product1, 1);
    transaction.addToCart(product2, 1);

    console.log("Total Price: ", transaction.showTotalPrice());
    console.log("Transaction Data: ", transaction.checkOut());
    console.log("Total Price: ", transaction.showTotalPrice());

