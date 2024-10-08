const user = {
    firstName: "Muhamamd",
    lastName: "Wildan",
    greet() {
        console.log(`Hello ${this.lastName}`) // this = mengacu pada object dimana method greet() berada
        console.log(`Hello ` + user.lastName)
    }
}

user.greet()

// Object.entries
// membuat array berisi property object (key: value)

console.log(Object.entries(user)) 

// Object.freee
// membuat object user tidak bisa di-edit

Object.freeze(user) 

// user.firstName = "Andi"

console.log(user)

// .hasOwnPropery 
// mengecek apakah ada property x dalam object tersebut

console.log(user.hasOwnProperty("firstName"))
console.log(user.hasOwnProperty("lastName"))
console.log(user.hasOwnProperty("greet"))
console.log(user.hasOwnProperty("age"))

// .isFroxen(objName)
// mengecek apakah object tersebut freeze atau tidak

console.log(Object.isFrozen(user))

// Object.values(objName)
// akses value semua key dalam object tersebut

console.log(Object.values(user))

// Object.assign
// merge property dari dua object
// 

const target = { a: 1, b: 2}
const source = { b: 4, c: 5}

console.log(target)

const final = Object.assign(target, source)

console.log(target)
console.log(source)
console.log(final)

console.log(target == final)

Object.assign(target, { d: 10 })

console.log(target)

