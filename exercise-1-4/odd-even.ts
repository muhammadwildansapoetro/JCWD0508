/*
Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
*/

function odd_even (number: number) {
    let res: string = ""
        if (number % 2 == 0) {
            res = `${number} is even number`
        } else {
            res = `${number} is odd number`
        }
        return res
}

console.log(odd_even(2))
console.log(odd_even(3))