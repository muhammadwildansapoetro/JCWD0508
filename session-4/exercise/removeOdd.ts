/*
Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

function removeOdd (arr: number[]) {
    return arr.filter(arrValue => arrValue % 2 === 0)
}

const inputArr: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const evenArr: number[] = removeOdd(inputArr)

console.log(evenArr)