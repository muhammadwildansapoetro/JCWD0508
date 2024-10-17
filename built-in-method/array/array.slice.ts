/* Array.prototype.slice()

The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Return a portion of an existing array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

// Omitting the end parameter

const fruits2 = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits2.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']

// Using negative indices

const fruits3 = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits3.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
