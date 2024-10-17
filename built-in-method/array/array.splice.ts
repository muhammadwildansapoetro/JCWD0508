/* Array.prototype.splice()

The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
*/

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Remove 0 (zero) elements before index 2, and insert "drum"

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log(removed);

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

const myFish2 = ["angel", "clown", "mandarin", "sturgeon"];
const removed2 = myFish2.splice(2, 0, "drum", "guitar");
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log(removed2);


// Remove 0 (zero) elements at index 0, and insert "angel"

const myFish3 = ["clown", "mandarin", "sturgeon"];
const removed3 = myFish3.splice(0, 0, "angel");
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
console.log(removed3);


// Remove 0 (zero) elements at last index, and insert "sturgeon"

const myFish4 = ["angel", "clown", "mandarin"];
const removed4 = myFish4.splice(myFish.length, 0, "sturgeon");
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
console.log(removed4);


// Remove 1 element at index 3

const myFish5 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed5 = myFish5.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
console.log(removed5);


// Remove 1 element at index 2, and insert "trumpet"

const myFish6 = ["angel", "clown", "drum", "sturgeon"];
const removed6 = myFish6.splice(2, 1, "trumpet");
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

const myFish7 = ["angel", "clown", "trumpet", "sturgeon"];
const removed7 = myFish7.splice(0, 2, "parrot", "anemone", "blue");
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

// Remove 2 elements, starting from index 2

const myFish8 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed8 = myFish8.splice(2, 2);
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

// Remove 1 element from index -2

const myFish9 = ["angel", "clown", "mandarin", "sturgeon"];
const removed9 = myFish9.splice(-2, 1);
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

// Remove all elements, starting from index 2

const myFish10 = ["angel", "clown", "mandarin", "sturgeon"];
const removed10 = myFish10.splice(2);
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]