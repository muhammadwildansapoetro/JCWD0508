/*
● Create a function to find a factorial number using recursion

● Example
    ○ Input : 5
    ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function factorial (n: number): number {
    console.log(n) 
    return n == 0 ? 1 : n * factorial(n-1)
}

console.log(factorial(5))

const factorial2 = (n: number): number => n == 0 ? 1 : n * factorial2(n-1)

console.log(factorial2(5))