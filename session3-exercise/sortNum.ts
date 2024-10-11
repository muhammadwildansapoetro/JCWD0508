/*
Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/

let num1: number = 42 // 27 , 18
let num2: number = 27 // 42 , 18 , 27
let num3: number = 18 // 42

if (num1 > num2) { // if 42 > 27
    const n: number = num1 // n = 42
    num1 = num2 // num1 = 27
    num2 = n // num2 = 42
}
if (num2 > num3) { // if 42 > 18
    const n: number = num2 // n = 42
    num2 = num3 // num2 = 18
    num3 = n // num3 = 42
}
if (num1 > num2) { // if 27 > 18
    const n: number = num1 // n = 27
    num1 = num2 // num1 = 18
    num2 = n // num2 = 27
}

console.log(num1, num2, num3)