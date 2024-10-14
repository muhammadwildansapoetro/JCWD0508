/*
    input = "Hello Purwadhika"
    output = [13, 2]

    input = "B4ndung"
    output = [5, 1]
*/

const input1 = "Hello Purwadhika"
const input2 = "B4ndung"
const input3 = "This string contain 37 lower case and 1 upper case"

function lowerUpperCount(input: string): number[] {

    const inputAlphabet = input.replace(/[^a-zA-Z]/g, "") // [^a-zA-Z]/g = regEx untuk semua character yang bukan alphabet

    let lower: number = 0
    let upper: number = 0

    for (let i = 0; i < inputAlphabet.length; i++) {
        inputAlphabet[i] == inputAlphabet[i].toUpperCase() ? upper += 1 : lower += 1
    }

    return [lower, upper]
}

console.log(lowerUpperCount(input1));
console.log(lowerUpperCount(input2));
console.log(lowerUpperCount(input3));