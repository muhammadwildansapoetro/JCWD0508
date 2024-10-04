/*
Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
*/

let input: any = true;
let typeInput: string = typeof input

console.log(typeInput == "string" ? 1 : typeInput == "number" ? 2 : 3)