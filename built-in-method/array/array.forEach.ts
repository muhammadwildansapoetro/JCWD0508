/* Array.prototype.reverse()

The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
*/

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

// Reversing the elements in an array

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]

// The reverse() method returns the reference to the same array

const numbers1 = [3, 2, 4, 1, 5];
const reversed1 = numbers1.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed1[0] = 5;
console.log(numbers1[0]); // 5

const numbers2 = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted2 = [...numbers2].reverse();
reverted2[0] = 5;
console.log(numbers2[0]); // 3
