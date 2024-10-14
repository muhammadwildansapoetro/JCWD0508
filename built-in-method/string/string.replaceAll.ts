/* String.prototype.replaceAll()

The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
The original string is left unchanged.

Syntax:
    replaceAll(pattern, replacement)

Parameters:

pattern
    Can be a string or an object with a Symbol.replace method — the typical example being a regular expression. 
    Any value that doesn't have the Symbol.replace method will be coerced to a string.
    If pattern is a regex, then it must have the global (g) flag set, or a TypeError is thrown.

replacement
    Can be a string or a function. 
    The replacement has the same semantics as that of String.prototype.replace().

Return value:
    A new string, with all matches of a pattern replaced by a replacement.
*/

const paragraph4 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph4.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex2 = /Dog/gi;
console.log(paragraph4.replaceAll(regex2, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

// example - Using replaceAll()

console.log("aabbcc".replaceAll("b", "."));
// 'aa..cc'

// example - Non-global regex throws

console.log("aabbcc".replaceAll(/b/g, "."));
("aa..cc");

