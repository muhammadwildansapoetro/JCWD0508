/* Number.prototype.toString()

The toString() method of Number values returns a string representing this number value.
*/

function hexColour(c: any) {
    if (c < 256) {
        return Math.abs(c).toString(16);
    }
    return 0;
}

console.log(hexColour(233));
// Expected output: "e9"

console.log(hexColour('11'));
// Expected output: "b"

/*
Syntax
js
Copy to Clipboard
toString()
toString(radix)
Parameters
radix Optional
An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.

Return value
A string representing the specified number value. Scientific notation is used if radix is 10 and the number's magnitude (ignoring sign) is greater than or equal to 1021 or less than 10-6.
*/

// Example

const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"

const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"

