/* Exercise 2 - Single Number

● Given a non-empty array of integers nums, every element appears twice except for one. Find that
single one.

● Example 1:
    ○ Input: nums = [2,2,1]
    ○ Output: 1

● Example 2:
    ○ Input: nums = [4,1,2,1,2]
    ○ Output: 4

● Example 3:
    ○ Input: nums = [1]
    ○ Output: 1
*/

function singleNum(nums: number[]) {
    const numCount = new Map<number, number>()

    // menghitung frekuensi number di array nums
    for (let num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1)
        // numCount.set untuk menambahkan element (key & value) ke map numCount
        // numCount.get(num) untuk mendapatkan value dari key num
        // atau || 0 agar tidak undefined saat map numCount masih kosong
    }

    // mencari number yang hanya ada 1 di array nums
    for (let [num, count] of numCount) { // [num, count] = [key, value]
        if (count == 1) {
            return num
        }
    }

    return `No single number in [${nums}]`
}

const input1: number[] = [2, 2, 1]
const input2: number[] = [4, 1, 2, 1, 2]
const input3: number[] = [1]
const input4: number[] = [1, 1, 2, 2, 3, 3]

console.log(singleNum(input1));
console.log(singleNum(input2));
console.log(singleNum(input3));
console.log(singleNum(input4));

// Pake XOR tapi tidak bisa cari single number yang jumlahnya lebih dari 1

function noTwiceNum(nums: number[]) {
    let result: number = 0

    for (let num of nums) {
        result = result ^ num
        // XOR (^) untuk compare bit dari 2 number, return 1 jika 2 number itu berbeda, return 0 jika 2 number itu sama
        // contoh: result = 4 ^ 1 = 5 karena dalam binary: 0100 ^ 0001 = 0101, sehingga hasilnya 0101 = 5
    }

    if (result == 0) return `No single number in [${nums}]`

    return result
}

const Input1: number[] = [1, 1, 2, 2, 3, 4]
const Input2: number[] = [4, 1, 2, 1, 2]
const Input3: number[] = [1]
const Input4: number[] = [1, 1, 2, 2, 3, 3]

console.log(noTwiceNum(Input1));
console.log(noTwiceNum(input2));
console.log(noTwiceNum(input3));
console.log(noTwiceNum(input4));

/*
Example 2: nums = [4, 1, 2, 1, 2]
The array has the numbers [4, 1, 2, 1, 2], where 4 appears once, and both 1 and 2 appear twice.

First iteration:
result = 0 ^ 4 = 4

Second iteration:
result = 4 ^ 1 = 5
(In binary: 0100 ^ 0001 = 0101, which is 5.)

Third iteration:
result = 5 ^ 2 = 7
(In binary: 0101 ^ 0010 = 0111, which is 7.)

Fourth iteration:
result = 7 ^ 1 = 6
(In binary: 0111 ^ 0001 = 0110, which is 6.)

Fifth iteration:
result = 6 ^ 2 = 4
(In binary: 0110 ^ 0010 = 0100, which is 4.)
*/

// double filter

function single(arr: number[]) {
    return arr
        .filter((item, _index, arr) => arr
            .filter(value => value == item).length == 1)
}

console.log(single([4, 1, 2, 1, 2]));

// example

const arr = [4, 1, 2, 1, 2, 3, 2]

arr.forEach((element, index, array) => {
    console.log(`${element} ada di index ke-${index} di array [${array}]`);
})

