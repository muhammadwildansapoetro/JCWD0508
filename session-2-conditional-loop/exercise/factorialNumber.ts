/*
Problem:
Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

Hint:
- Use for loop statement
- decrement each loop
- result * decrement
- limit iteration = input number

Solution:
1. Create input variable and assign value data type number
   const n = input number
   let result = 1 (so not start multiple with 0)
2. Create formula in for loop statement
   for (let i = 1; i <= n; i--)
3. Create code if for loop condition is true
   result *= i / result = result * i
3. Create output variable
   let result = 
*/

const n: number = 4

let result: number = 1

for (let i = n; i >= 1; i--) {
    result *= i
    console.log(result)
}

console.log(result)
