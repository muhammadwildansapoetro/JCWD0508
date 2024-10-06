/*
Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
*/

function sum (number: number) {
    let res: number = 0
    for (let i = 1; i <= number; i++) {
         res += i
    }
    return `Sum of the number 1 to ${number} is ${res}`
}

console.log(sum(5))