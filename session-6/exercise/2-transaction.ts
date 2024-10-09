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

// membuat class sebagai template untuk object baru dengan property yang sama
    name: string = ""
    price: number = 0

    constructor (name: string, price: number) {
        this.name = name
        this.price = price
    }
}

class Transaction {
    total: number = 0
    product: {product}[] = []

    addToCart() {
        // add product to transaction
    }

    showTotal() {
        // show total current transaction
    }

    checkOut() {
        // finalize transaction, return transaction data
    }
}