/* Array.prototype.map()

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Mapping an array of numbers to an array of square roots

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// Using map to reformat objects in an array

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

// Using parseInt() with map()

console.log(["1", "2", "3"].map(parseInt))

console.log(["1", "2", "3"].map(Number)); // [1, 2, 3]
