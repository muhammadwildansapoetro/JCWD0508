/*
Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/

function stringToArr (str: string) {
    return str.split(" ")
}

const inputStr: string = "Hello World From Bandung"

console.log(stringToArr(inputStr))