/*
Problem:
Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
*/

const inputString: string = "Hello world"
const removeChar: string = "ell"
let firstChar: number = inputString.indexOf(removeChar)

console.log(firstChar) 

if (firstChar == 1) {
    let outputString = inputString.slice(0, firstChar) + inputString.slice(firstChar + removeChar.length);
    console.log(outputString)
} else {
    console.log(inputString)
}

console.log(inputString.slice(0, firstChar))
console.log(removeChar.length)
console.log(inputString.slice(firstChar, removeChar.length))
console.log(inputString.indexOf(removeChar))

// simple way

const str: string = "Hello World"
const searchStr: string = "ell"
const res: string = str.replace(searchStr,"")

console.log(res)
