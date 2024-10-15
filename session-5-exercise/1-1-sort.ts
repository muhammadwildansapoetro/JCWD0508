/*
Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

---

arr.reduce((sum, num) => sum + num, 0): 

The reduce() method is used to sum all the numbers in the original array arr.

- sum is the accumulator that stores the total sum as the function iterates over the array.
- num is the current element in the array.
- 0 is the initial value of sum.

This expression adds up all the numbers in the array.

*/

// with sort()

function statWithSort (arr: number[]) {
    const sortedArr = [...arr].sort((a,b) => a - b)
        console.log(sortedArr)

    const lowest = sortedArr[0]
        console.log(lowest)
    const highest = sortedArr[arr.length - 1]
        console.log(highest)
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length
        console.log(average)
    
    return `{lowest : ${lowest}, highest : ${highest}, average : ${average}}`
}

const stat: string = statWithSort([12, 5, 23, 18, 4, 45, 32])
console.log(stat)

// other way

console.log(Math.max(1, 2, 3, 4, 5)) // untuk mencari nilai terbesar dalam array
console.log(Math.min(1, 2, 3, 4, 5)) // untuk mencari nilai terkecil dalam array

function minMaxAvg (arr: number[]) {
    const lowest: number = Math.min(...arr) // Math.min tidak bisa merima array, makanya diconvert ke number bisa dengan ...
    const highest: number = Math.max(...arr)
    const average: number = arr.reduce((a, b) => a + b) / arr.length // reduce = melakukan function untuk semua elemen di array

    return {
        lowest: lowest,
        highest: highest,
        average: average
    }
}

console.log(minMaxAvg([12, 5, 23, 18, 4, 45, 32]))

