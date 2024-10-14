/* String.prototype.concat()

The concat() method of String values concatenates the string arguments 
to this string and returns a new string. 

Syntax:
    concat()
    concat(str1)
    concat(str1, str2)
    concat(str1, str2, / …, / strN)

Parameters:
str1, …, strN
    One or more strings to concatenate to str.

Return value
    A new string containing the combined text of the strings provided. */

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(' ', str1));
// Expected output: "World, Hello"
