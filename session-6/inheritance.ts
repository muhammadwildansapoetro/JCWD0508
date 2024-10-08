// inheritance , penurunan , pewarisan

class Product { // class Product menjadi parent class Book karena "Book extends Product"
    productName = ""
    productPrize = 0

    constructor (name: string, price: number) {
        this.productName = name
        this.productPrize = price
    }
}

class Book extends Product { // keyword "extends" = class Book merupakan child class dari class Product karena "Book extends Product"
    title = ""
    author = ""

    constructor(title: string, author: string, price: number) {
        super("Book", price) // keyword "super" mengakses constructor class parent (Product)
        this.title = title
        this.author = author
    }
}

const  book1 = new Book("Clean Code", "Robert C. Martin", 1000000)

console.log(book1)

console.log(book1 instanceof Book) // book1 bagian dari class Book
console.log(book1 instanceof Product) // book1 bagian dari class Prodcut