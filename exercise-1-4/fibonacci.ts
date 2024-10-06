/*
Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/

function fibonacci (number: number) {
    let a: number = 0
    let b: number = 1
    let nextNumber: number = 0
    for (let i = 1; i < number; i++) {
        console.log(i)
        nextNumber = a + b
        a = b
        b = nextNumber
        console.log(nextNumber)
    }
    return `The F-${number} fibonacci numbers is ${nextNumber}`
}

console.log(fibonacci(15))