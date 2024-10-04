/*
Problem:
Write a code to check whether the number is odd or even
Example: 25 → odd number, 2 → even number

Hint:
- Odd numbers are not divisible by two
- Even numbers are divisible by two

Solutions:
1. Create variable input and assign value (number):
   const n = (number)
2. Create if statement
   if (n % 2 == 0)
    then n is even number
   else
    then n is odd number
*/

const n: number = 1

if (n % 2 == 0) {
    console.log(`${n} is an even number`);
} else {
    console.log(`${n} is an odd number`);
}