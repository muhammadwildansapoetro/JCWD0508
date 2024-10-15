/* Array.prototype.concat()

The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// Example - Concatenating two arrays

const letters: string[] = ["a", "b", "c"];
const numbers: any[] = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

// Example - Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers2 = num1.concat(num2, num3);

console.log(numbers2);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Example - Concatenating values to an array

const letters2: any[] = ["a", "b", "c"];

const alphaNumeric2: any[] = letters2.concat(1, [2, 3]);

console.log(alphaNumeric2);
// results in ['a', 'b', 'c', 1, 2, 3]


// Example - Concatenating nested arrays

const Num1: any[] = [[1]];
const Num2: any[] = [2, [3]];

const Numbers = Num1.concat(Num2);

console.log(Numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
Num1[0].push(4);

console.log(Numbers);
// results in [[1, 4], 2, [3]]


