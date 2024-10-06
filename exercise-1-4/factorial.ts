/*
Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

function factorial (number: number) {
    let res: number = 1
    for (let i = number; i >= 1; i--) {
        console.log(i)
        res *= i
        console.log(res)
    }
    return `Factorial of number ${number} is ${res}`
}

console.log(factorial(4))