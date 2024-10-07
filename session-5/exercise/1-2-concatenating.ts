/*
Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

function concatenating (arr: string[] = []) {
    arr.splice(arr.length - 1, 1, ` and ${arr[arr.length - 1]}`)
    return arr.join(', ')
}

console.log(concatenating(['apple', 'banana', 'cherry', 'date', 'oranges', 'avocado']))

// other way

function concate (input: string[]) {
    const str: string = input.pop() || ""
    return input.join(", ") + ", and " + str
}

console.log(concate(["apple", "banana", "cherry", "dates"]))