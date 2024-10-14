// setiap object tidak bisa dibandingkan, kecuali referensi-nya sama

const arr = [1, 2, 3]
const arr2 = [1, 2, 3]
const arr3 = arr

console.log(arr == arr2) // object data non-primitive tidak bisa dibandingkan
console.log(arr == arr3) // referensi-nya sama

const obj1 = { name: "Andi" }
const obj2 = { name: "Andi" }

console.log(obj1 == obj2) // karena object data non-primitive tidak bisa dibandingkan 

const null1 = null // null = obejct data primitive
const null2 = null // null = object data primitive

console.log(typeof null) // object data primitive

console.log(null1 == null2) // bisa dibandingkan karena object data primitive

console.log(typeof "string")
console.log(typeof 123)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)


