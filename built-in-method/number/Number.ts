/* Number

Number values represent floating-point numbers like 37 or -9.25.

The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

*/

console.log(255); // two-hundred and fifty-five
console.log(255.0); // same number
console.log(255 === 255.0); // true
console.log(255 === 0xff); // true (hexadecimal notation)
console.log(255 === 0b11111111); // true (binary notation)
console.log(255 === 0.255e3); // true (decimal exponential notation)

console.log(Number("123")); // returns the number 123
console.log(Number("123") === 123); // true

console.log(Number("unicorn")); // NaN
console.log(Number(undefined)); // NaN

