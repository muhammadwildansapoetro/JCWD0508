/* String.prototype.search()

The search() method of String values executes a search for a match between a regular expression and this string, 
returning the index of the first match in the string.

Syntax:
    search(regexp)

Parameters:
regexp
    A regular expression object, or any object that has a Symbol.search method.
    If regexp is not a RegExp object and does not have a Symbol.search method, 
    it is implicitly converted to a RegExp by using new RegExp(regexp).

Return value:
    The index of the first match between the regular expression and the given string, or -1 if no match was found.
*/

const paragraph5 = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex3 = /[^\w\s']/g;

console.log(paragraph5.search(regex3));
// Expected output: 41

console.log(paragraph5[paragraph5.search(regex3)]);
// Expected output: "!"

// example

const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation




