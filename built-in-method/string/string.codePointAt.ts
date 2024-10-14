/* String.prototype.codePointAt()

The codePointAt() method of String values returns a non-negative integer 
that is the Unicode code point value of the character starting at the given index. 

Note that the index is still based on UTF-16 code units, not Unicode code points.

Syntax:
    codePointAt(index)

Parameters
index
    Zero-based index of the character to be returned. 
    Converted to an integer — undefined is converted to 0.

Return value
A non-negative integer representing the code point value of the character at the given index.
    If index is out of the range of 0 – str.length - 1, codePointAt() returns undefined.
    If the element at index is a UTF-16 leading surrogate, returns the code point of the surrogate pair.
    If the element at index is a UTF-16 trailing surrogate, returns only the trailing surrogate code unit.*/

const icons = '☃★♲';

console.log(icons.codePointAt(0));
// Expected output: "9733"
