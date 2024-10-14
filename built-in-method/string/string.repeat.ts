/* String.prototype.repeat()

The repeat() method of String values constructs and returns a new string 
which contains the specified number of copies of this string, concatenated together.

Syntax:
    repeat(count)

Parameters:
count
    An integer between 0 and +Infinity, indicating the number of times to repeat the string.

Return value:
    A new string containing the specified number of copies of the given string.

*/

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

// example

// console.log("abc".repeat(-1)); // RangeError
console.log("abc".repeat(0)); // ''
console.log("abc".repeat(1)); // 'abc'
console.log("abc".repeat(2)); // 'abcabc'
console.log("abc".repeat(3.5)); // 'abcabcabc' (count will be converted to integer)
// console.log("abc".repeat(1 / 0); // RangeError

console.log(({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2));
// 'abcabc' (repeat() is a generic method)