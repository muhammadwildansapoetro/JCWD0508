/* String.prototype.charAt()

The charAt() method of String values returns a new string consisting 
of the single UTF-16 code unit at the given index.

charAt() always indexes the string as a sequence of UTF-16 code units, 
so it may return lone surrogates. 

To get the full Unicode code point at the given index, 
use String.prototype.codePointAt() and String.fromCodePoint(). 

Syntax:
    charAt(index)

Parameters
index
    Zero-based index of the character to be returned. 
    Converted to an integer — undefined is converted to 0.

Return value
    A string representing the character (exactly one UTF-16 code unit) at the specified index. 
    If index is out of the range of 0 – str.length - 1, 
    charAt() returns an empty string.
*/

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(sentence.charAt(0));
console.log(sentence.charAt(2));

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

// example

const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);