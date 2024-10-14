let name: string = "Wildan"

let newName: string = name

name = "Budi"

console.log(name)
console.log(newName) // karena proses dari atas ke bawah 

const arr: number[] = [1, 2, 3]
const newArr: number[] = arr

console.log(newArr)
console.log(arr)

arr.push(4)

console.log(arr)
console.log(newArr) // kenapa newArr dapat value .push(4)

/*
MUTABLE
value di dalam array / object bisa diubah walaupun const
mutable type = non primitive = object & array
mutable type = reference type
value disimpan di the heap

IMMUTABLE
tidak bisa diubah
immutable type = primitive: string, number, bigInt, boolean, null, undefined
immutable type = value type
data disimpan di the stack
*/

// Copy value = spread operator (...)

const arr2: number[] = [1, 2, 3]
const newArr2: number[] = [...arr2]

console.log(newArr2)
console.log(arr2)

arr2.push(4)

console.log(arr2)
console.log(newArr2)

// Mutable type = reference type = mengacu pada data yang sama

interface Iperson {
    name: string
    age: number
}

const person: Iperson = {
    name: "Wildan",
    age: 27
}

const newPerson = person

newPerson.name = "Budi"

console.log(person)
console.log(newPerson)

// jika mau dianggap berbeda

const person2 = {
    name: "Wildan",
    age: 27
}

const newPerson2 = {...person2}

newPerson2.name = "Budi"

console.log(person2)
console.log(newPerson2)

// Cara looping object (for ... in (objName))

for (let kunci in person) { // kunci = key dalam object person
    console.log(kunci) // ambil key
    console.log(person[kunci as keyof typeof person]) // ambil value, keyof typeof memastikan kunci adalah bagian dari object person
}
