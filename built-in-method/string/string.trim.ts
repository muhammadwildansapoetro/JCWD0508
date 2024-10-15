/* String.prototype.trim()

The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
*/

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

/*
Return value
A new string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators.

If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).
*/

const str = "   foo  ";
console.log(str.trim()); // 'foo'
