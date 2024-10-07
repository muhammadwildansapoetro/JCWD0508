/*
Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/

/*
1. arr.filter():
- The filter() method creates a new array with all elements 
  that pass the test implemented by the provided function.
- In this case, the test is arr.indexOf(item) !== index, 
  which means only items that meet this condition will be included in the resulting array.

2. Parameters of filter():
- item: The current element being processed in the array.
- index: The index of the current element being processed in the array.

3. arr.indexOf(item):
indexOf() returns the first occurrence of item in the array arr. 
It gives the index of the first time the item appears in the array.

4. Condition arr.indexOf(item) !== index:
- This condition checks if the current item’s first occurrence in the array 
  (i.e., the result of arr.indexOf(item)) is not the same as its current position (index).
- If this is true, it means that the item is not the first occurrence and therefore a duplicate.
*/

function duplicate (arr: number[]) {
    return arr.filter((item, index) => arr.indexOf(item) !== index)
}

console.log(duplicate([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8]))

