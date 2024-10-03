/*
Problem:
Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number


*/

const num: number = 361

let divider: number = 0

for (let i = 1; i <= num; i++) {
    if(num % i == 0) {
        divider++
    }
}

console.log(
    divider == 2 ?
    `${num} ia a prime number` :
    `${num} is not a prime number`
)

