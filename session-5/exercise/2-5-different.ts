/*
Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/

/*
Filter elements that are unique to arr1:

1. arr1.filter(item => !arr2.includes(item))

- This filters elements from arr1 that are not present in arr2. 
- It checks each item from arr1 and returns it only if arr2 does not include that item.

2. Filter elements that are unique to arr2:

arr2.filter(item => !arr1.includes(item))

Similarly, this filters elements from arr2 that are not present in arr1.

3. Combine the results using the spread operator (...):

[ ...arr1.filter(...), ...arr2.filter(...) ] 

combines the unique elements from both arrays into a new array.
*/

function different (arr1: number[], arr2: number[]) {
    return [
        ...arr1.filter(item => !arr2.includes(item)), 
        ...arr2.filter(item => !arr1.includes(item))
    ]
}

console.log(different([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))