/* String.prototype.endsWith()

The endsWith() method of String values determines 
whether a string ends with the characters of this string, 
returning true or false as appropriate. 

Syntax:
    endsWith(searchString)
    endsWith(searchString, endPosition)

Parameters:

searchString
    The characters to be searched for at the end of str. 
    Cannot be a regex. All values that are not regexes are coerced to strings, 
    so omitting it or passing undefined causes endsWith() 
    to search for the string "undefined", which is rarely what you want.

endPosition (Optional)
    The end position at which searchString is expected to be found 
    (the index of searchString's last character plus 1). 
    Defaults to str.length.

Return value
    true if the given characters are found at the end of the string, 
    including when searchString is an empty string; otherwise, false. */

const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!'));
// Expected output: true

console.log(str3.endsWith('best', 17));
// Expected output: true

const str4 = 'Is this a question?';

console.log(str4.endsWith('question'));
// Expected output: false

// example

const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
console.log(str.endsWith("To be", 5)); // true