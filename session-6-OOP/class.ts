// class = template untuk membuat object dengan property yang sama
// penamaan class biasanya diawali dengan huruf kapital
// ciri khas class = huruf awal nama class kapital
// class juga diawali dengan new

// template object

class User {
    #firstName = "" // private property
    lastName = ""  // public property
    static word = "Hello World" // static property

    constructor (first: string, last: string) { // Function bawaan untuk class. Jika last: string = "", maka last jadi opsional / tidak wajib diisi)
        this.#firstName = first
        this.lastName = last
    }

    greet() {
        console.log(`Hello ${this.lastName}`)
    }

    getFirstName() {
        return this.#firstName
    }
}

const user1 = new User("Muhammad", "Wildan")
const user2 = new User("Mohamed", "Salah")
const user3 = new User("Karim", "Benzema")

console.log(user1) // property firstName tidak muncul karena private
console.log(user2) // property firstName tidak muncul karena private
console.log(user3) // property firstName tidak muncul karena private

user1.greet()
user2.greet()
user3.greet()

console.log(user1.getFirstName()) // fungsi .getFirstName untuk mendapatkan value property yang private
console.log(user2.getFirstName()) // fungsi .getFirstName untuk mendapatkan value property yang private
console.log(user3.getFirstName()) // fungsi .getFirstName untuk mendapatkan value property yang private

console.log(User.word)

console.log(Math.PI)