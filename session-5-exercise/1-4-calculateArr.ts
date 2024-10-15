/*
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function calArr (arr1: number[], arr2: number[]) {
    let res: number[] = []

    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }
    
    return res
}

console.log(calArr([1, 1, 1], [1, 1, 1]))