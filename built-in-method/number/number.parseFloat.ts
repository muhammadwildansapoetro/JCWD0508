/* Number.parseFloat()

The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
*/

function circumference(r: string) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference('4.567abcdefgh'));
// Expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// Expected output: 0

/*
Syntax
js
Copy to Clipboard
Number.parseFloat(string)
Parameters
string
The value to parse, coerced to a string. Leading whitespace in this argument is ignored.

Return value
A floating point number parsed from the given string.

Or NaN when the first non-whitespace character cannot be converted to a number.
*/

/*
Examples
Number.parseFloat vs. parseFloat
This method has the same functionality as the global parseFloat() function:

js
Copy to Clipboard
*/

console.log(Number.parseFloat === parseFloat); // true