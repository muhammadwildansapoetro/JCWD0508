/*
Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

function combineArr (arr1: number[], arr2: number[]) {
    let newArr: number[]= []
    return newArr = arr1.concat(arr2)
}

console.log(combineArr([3, 4, 5], [6, 7, 8]))
