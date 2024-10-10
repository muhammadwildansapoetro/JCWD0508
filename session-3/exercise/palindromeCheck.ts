/*
Problem:
Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome

Hint:
1. A palindrome is a word, number, phrase, or other sequence of symbols 
    that reads the same backwards as forwards, 
    such as madam or racecar, 
    the date "22/02/2022" 
*/

const str: string = "Raceacar"
let reverseStr: string = ""

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i)
    console.log(reverseStr)
}

console.log(str == reverseStr ? "Palindrome" : "Not Palindrome") 

console.log(str.length)


// other way with no case sensitive

let lower: string = str.toLowerCase()
let split: string = lower.split("").join("")
let reverse: string = split.split("").reverse().join("")

console.log(lower)
console.log(split)
console.log(reverse)

if (split === reverse) {
    console.log(`${str} is a palindrome`)
} else {
    console.log(`${str} is not a palindrome`)
}

