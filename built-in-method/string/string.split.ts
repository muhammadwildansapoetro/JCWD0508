/*String.prototype.split()

The split() method of String values takes a pattern 
and divides this string into an ordered list of substrings by searching for the pattern, 
puts these substrings into an array, 
and returns the array.
*/

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

/*
Syntax:
    split(separator)
    split(separator, limit)

Parameters:

separator
    The pattern describing where each split should occur. 
    Can be undefined, a string, or an object with a Symbol.split method — the typical example being a regular expression. 
    Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. All values that are not undefined or objects with a [Symbol.split]() method are coerced to strings.

limit (Optional)
    A non-negative integer specifying a limit on the number of substrings to be included in the array. 
    If provided, splits the string at each occurrence of the specified separator, 
    but stops when limit entries have been placed in the array. 
    Any leftover text is not included in the array at all.
        The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
        If limit is 0, [] is returned.

Return value:
    An Array of strings, split at each point where the separator occurs in the given string.
*/

/* Examples

Using split()
When the string is empty and a non-empty separator is specified, split() returns [""]. 
If the string and separator are both empty strings, an empty array is returned.
*/

const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []

/*
The following example defines a function that splits a string into an array of strings using separator. 

After splitting the string, the function logs messages indicating the original string (before the split), 
the separator used, the number of elements in the array, and the individual array elements.
*/

function splitString(stringToSplit: string, separator: string) {
    const arrayOfStrings = stringToSplit.split(separator);

    console.log("The original string is:", stringToSplit);
    console.log("The separator is:", separator);
    console.log(
        "The array has",
        arrayOfStrings.length,
        "elements:",
        arrayOfStrings.join(" / "),
    );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
// splitString(tempestString);
splitString(monthString, comma);
