/* Number.prototype.toExponential()

The toExponential() method of Number values returns a string representing this number in exponential notation.


*/

function expo(x: any, f?: any) {
    return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo('123456'));
// Expected output: "1.23456e+5"

console.log(expo('oink'));
// Expected output: "NaN"

/*
Syntax
js
Copy to Clipboard
toExponential()
toExponential(fractionDigits)

Parameters
fractionDigits Optional
Optional. An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

Return value
A string representing the given Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point.
*/

const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
