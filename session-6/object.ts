// TypeScript Interface
// Bisa diturunkan / inheritance
// Bisa di-merge
// Aturan tidak tertulis, untuk declare data type object gunakan interface karena ada fitur ihenritance dan merge

interface Icar {
    brand: string // property ( key: value )
    model: string
    price?: number // optional chaining (?) = safe way to access nested object properties, even if an intermediate property doesn’t exist.
}

const car: Icar = {
    brand: "123", // property ( key: value, )
    model: "M135i xDrive",
    price: 800000000
}

// TypeScript Type-Alias
// Cara kedua declare data type
// Tidak bisa inheritance dan merge

type Car = {
    brand: string, // harus pake koma untuk memisahkan property
    model: string,
    price: number
}

const car2: Car = {
    brand: "123", // property ( key: value, )
    model: "M135i xDrive",
    price: 800000000
}

// Properties & Method

interface Iuser {
    name: string
    hobby?: string
    address?: { // tipe data adress = object (? = optional chaining)
        street: string
        city: string
        country: string
    }
    greeting(input: string): void // void = tidak ada return 
}

const user: Iuser = {
    name: "Wildan", // property = name/key + value di dalam object
    greeting(input: string) { // method = function di dalam object
        console.log("Hello" + input)
    }
}

// Cara ke-1 access value dalam object dengan dot (.)

console.log(user.name)

// Cara ke-2 access value dalam object dengan square bracket []

console.log(user["name"])

user.greeting(" Wildan")

// Cara menambahkan property baru dalam object

user.hobby = "coding"
console.log(user)

// Cara delete property dalam object

delete user.hobby
console.log(user)

console.log(user.hobby) // karena property hobby sudah di-delete

// Optional Chaining

console.log(user.address?.street) 

// Menambah property tipe object ke dalam object

user.address = {
    street: "Cikajang Raya",
    city: "Bandung",
    country: "Indonesia"
}

console.log(user.address.street) 
console.log(user.address.city) 
console.log(user.address.country) 
console.log(user) 

// Cara mendapatkan key dalam object dengan Object.keys(objName) = (output = array [])

console.log(Object.keys(user))