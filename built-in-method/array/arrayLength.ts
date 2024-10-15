/* Array: length

The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
*/

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// Expected output: 4

//

const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

// listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

// const listC = new Array(-100); // Negative numbers are not allowed
// RangeError: Invalid array length

const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2

// Example - Iterating over an array


const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
    numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]

// Example - Shortening an array

const numbers2 = [1, 2, 3, 4, 5];

if (numbers2.length > 3) {
    numbers2.length = 3;
}

console.log(numbers2); // [1, 2, 3]
console.log(numbers2.length); // 3
console.log(numbers2[3]); // undefined; the extra elements are deleted

// Create empty array of fixed length

const numbers3: any = [];
numbers3.length = 3;
console.log(numbers3); // [empty x 3]
