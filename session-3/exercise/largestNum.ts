/*
Write a code to find the largest of two given integers
○ Example : num1 = 42, num2 = 27 → 42
*/

const num1: number = 42
const num2: number = 27

if (num1 > num2) {
    console.log(`${num1} is the largest number`)
} else {
    console.log(`${num2} is the largest number`)
}

console.log(num1 > num2 ? num1 : num2)