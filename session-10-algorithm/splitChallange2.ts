/*
    input = "helloWorld"
    output = ["hello", "World"]

    input = "johnDoeMiller"
    output = ["john", "Doe", "Miller"]
*/

const input1 = "helloWorld"
const input2 = "johnDoeMiller"

function splitUpper(str: string) {
    return str
        .split("")
        .map((item) => item == item.toUpperCase() ? ` ${item}` : item)
        .join("")
        .split(" ")
}

console.log(splitUpper(input1));
console.log(splitUpper(input2));
