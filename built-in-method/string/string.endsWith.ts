/* String.prototype.endsWith()

The endsWith() method of String values determines 
whether a string ends with the characters of this string, 
returning true or false as appropriate. 
*/

const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!'));
// Expected output: true

console.log(str3.endsWith('best', 17));
// Expected output: true

const str4 = 'Is this a question?';

console.log(str4.endsWith('question'));
// Expected output: false

// example

const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
console.log(str.endsWith("To be", 5)); // true