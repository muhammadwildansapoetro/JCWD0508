/* Array.prototype.shift()

The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
*/

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

// Example - Removing an element from an array

const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel

