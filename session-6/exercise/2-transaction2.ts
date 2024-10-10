class Product {
    name: string = ""
    price: number = 0

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

const product1 = new Product("Apple", 20000)
const product2 = new Product("Banana", 10000)
const product3 = new Product("Cherry", 30000)

// console.log(product1)
// console.log(product2)
// console.log(product3)

class Transaction {
    #totalPrice: number = 0
    #cart: object[] = []

    addToCart (product: Product, qty: number) {
        this.#cart.push({...product, qty}) 
        this.#totalPrice += product.price * qty
    }

    show() {
        this.#cart.push({ total: this.#totalPrice})
        console.table(this.#cart)
    }

    checkout(money: number) {
        if (money < this.#totalPrice) {
            console.log("Maaf, uang anda tidak cukup") // throw new Error("Uang anda tidak cukup")
        } else {
            console.log(`Cash: ${money}`)
            console.log(`Return: ${money - this.#totalPrice}`)
            console.log(`--- Thank You ---`)
        }
    }

}

const transaction1 = new Transaction()

transaction1.addToCart(product1, 1)
transaction1.addToCart(product2, 2)
transaction1.addToCart(product2, 3)

transaction1.checkout(80000)

