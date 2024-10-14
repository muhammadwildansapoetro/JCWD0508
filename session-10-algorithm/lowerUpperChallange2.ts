/*
    input = "Hello Purwadhika"
    output = [13, 2]

    input = "B4ndung"
    output = [5, 1]
*/

const input1 = "Hello Purwadhika"
const input2 = "B4ndung"
const input3 = "This string contain 37 lower case and 1 upper case"

function lowerUpperCount(str: string) {
    const letter = str.replace(/[\s/0-9]/g, "")
    const lower = letter.replace(/[A-Z]/g, "")

    return [lower.length, (letter.length - lower.length)]
}

console.log(lowerUpperCount(input1));
console.log(lowerUpperCount(input2));
console.log(lowerUpperCount(input3));