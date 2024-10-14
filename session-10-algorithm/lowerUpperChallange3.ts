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
    return [
        str.replace(/[^a-z]/g, "").length,
        str.replace(/[^A-Z]/g, "").length,
    ];
}

console.log(lowerUpperCount(input1));
console.log(lowerUpperCount(input2));
console.log(lowerUpperCount(input3));