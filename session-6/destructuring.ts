const person = {
    name: "Wildan",
    age: 27,
    hobby: "coding"
}

console.log(person.name)
console.log(person.age)
console.log(person.hobby)

// Object Destructuring (
// Tidak harus urut karena mengacu pada key

const { name, age, hobby } = person

console.log(name)
console.log(age)
console.log(hobby)

// Array Destructuring
// harus urut karena mengacu pada index

const arr = [1, 2, 3]
const [a, b, c] = arr

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(a)
console.log(b)
console.log(c)



