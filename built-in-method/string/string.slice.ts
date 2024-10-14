/* String.prototype.slice()

The slice() method of String values extracts a section of this string and returns it as a new string, 
without modifying the original string.

Syntax:
    slice(indexStart)
    slice(indexStart, indexEnd)

Parameters:

indexStart
    The index of the first character to include in the returned substring.

indexEnd (Optional)
    The index of the first character to exclude from the returned substring.

Return value:
    A new string containing the extracted section of the string.

*/

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
