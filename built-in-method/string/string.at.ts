/* String.prototype.at()

The at() method of String values takes an integer value 
and returns a new String consisting of the single UTF-16 code unit located at the specified offset. 

This method allows for positive and negative integers. 
Negative integers count back from the last string character. 

Syntax:
    at(index)

Parameters:
index
    The index (position) of the string character to be returned. 
    Supports relative indexing from the end of the string when passed a negative index; 
    i.e. if a negative number is used, 
    the character returned will be found by counting back from the end of the string.

Return value
    A String consisting of the single UTF-16 code unit located at the specified position. 
    Returns undefined if the given index can not be found. */

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 0;

console.log(sentence.at(0));

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(sentence.at(-4));

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

// example

// A function which returns the last character of a given string
function returnLast(str: string) {
    return str.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'