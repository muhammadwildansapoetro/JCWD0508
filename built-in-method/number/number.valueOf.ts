/* Number.prototype.valueOf()

The valueOf() method of Number values returns the value of this number.


*/

const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"

// Example

const numObj2 = new Number(10);
console.log(typeof numObj2); // object

const num2 = numObj2.valueOf();
console.log(num2); // 10
console.log(typeof num2); // number
