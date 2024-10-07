/*
Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/

function sumNum (arr: any[]) {
    let sum: number = 0

    for (let element of arr) {
        if (typeof element === 'number') {
            sum += element
        }
    }

    return sum
}

console.log(sumNum(["3", 1, "string", null, false, undefined, 2]))