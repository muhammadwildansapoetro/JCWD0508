/*
Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

function secSmall (arr: number[]) {
    arr.sort((a, b) => a - b)
    return arr[1]
}

console.log(secSmall([5, 3, 2, 7, 2, 6, 1, 1, 1, 1, 1]))

// other way

function secSmall2 (numbers: number[]) {
    numbers.sort((a, b) => a - b)
    let output = numbers[0]
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > output) {
            output = numbers[i]
            i = numbers.length
        }
    } 

    return output
}

console.log(secSmall2([1, 1, 1, 2, 3, 4, 5]))