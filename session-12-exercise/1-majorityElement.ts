/*
● Given an array nums of size n, return the majority element. The majority element is the element that
appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

● Example 1:
    ○ Input: nums = [3,2,3]
    ○ Output: 3

● Example 2:
    ○ Input: nums = [2,2,1,1,1,2,2]
    ○ Output: 2
*/

// asumstion the input array always have majority element
function majorityElement(nums: number[]) {
    let candidate: number = 0
    let count: number = 0

    // first pass: finding majority element candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num
        }

        count += (num === candidate) ? 1 : -1
        // if the end of loop, count = 0, it means no majority element (qty each element are same)
    }

    return candidate
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 1, 2, 2]));
console.log(majorityElement([3, 3, 2, 2])); // no majority
