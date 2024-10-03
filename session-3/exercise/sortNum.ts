/*
Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/

const num1: number = 432
const num2: number = 321
const num3: number = 213

let sortedNum: number[] = []

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        sortedNum = [num1, num2, num3]
    } else {
        sortedNum = [num1, num3, num2]
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        sortedNum = [num2, num1, num3]
    } else {
        sortedNum = [num2, num3, num1]
    }
} else {
    if (num1 <= num2) {
        sortedNum = [num3, num1, num2]
    } else {
        sortedNum = [num3, num2, num1]
    }
}

console.log(sortedNum)