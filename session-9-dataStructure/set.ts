/*
Set

The main Feature of Set is it doesn’t allow duplicate values (unique values).

Set Built-in Methods:
● add
● delete
● has
● clear
● size
● entries
● forEach
*/

const fruit: string[] = ["banana", "apple", "jackfruit", "apple"]

const newFruit = new Set(fruit)
console.log(newFruit)

newFruit.add("melon")
console.log(newFruit)

newFruit.delete("jackfruit")
console.log(newFruit)

newFruit.has("banana")
console.log(newFruit.has("banana"))

// console.log(newFruit.clear())

console.log(newFruit.size)

console.log(newFruit.entries())

newFruit.forEach((item) => {
    console.log(item)
})
