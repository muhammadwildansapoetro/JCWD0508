/* Array.prototype.indexOf()

The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

*/

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// Using indexOf()

const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// Finding all the occurrences of an element

const indices = [];
const array2 = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array2.indexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = array2.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

