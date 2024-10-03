/*
Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
*/

let inputData = true;
let dataTypeNum;

if (typeof inputData === "string") {
    dataTypeNum = 1
} else if (typeof inputData === "number") {
    dataTypeNum = 2
} else {
    dataTypeNum = 3
}

console.log(dataTypeNum)