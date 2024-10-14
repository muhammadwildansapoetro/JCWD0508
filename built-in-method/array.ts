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
    Returns undefined if the given index can not be found.*/

const sentence1 = 'The quick brown fox jumps over the lazy dog.';

let index1 = 0;

console.log(sentence1.at(0));

console.log(`An index of ${index1} returns the character ${sentence1.at(index1)}`);
// Expected output: "An index of 5 returns the character u"

index1 = -4;

console.log(sentence1.at(-4));

console.log(`An index of ${index1} returns the character ${sentence1.at(index1)}`);
// Expected output: "An index of -4 returns the character d"



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

const sentence2 = 'The quick brown fox jumps over the lazy dog.';

const index2 = 4;

console.log(sentence2.charAt(0));
console.log(sentence2.charAt(2));

console.log(`The character at index ${index2} is ${sentence2.charAt(index2)}`);
// Expected output: "The character at index 4 is q"



/* String.prototype.charCodeAt()
 
The charCodeAt() method of String values returns an integer between 0 and 65535 
representing the UTF-16 code unit at the given index.

charCodeAt() always indexes the string as a sequence of UTF-16 code units, 
so it may return lone surrogates. 

To get the full Unicode code point at the given index, use String.prototype.codePointAt(). 

Syntax:
    charCodeAt(index)

Parameters
index
    Zero-based index of the character to be returned. 
    Converted to an integer — undefined is converted to 0.

Return value
    An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. 
    If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.*/

const sentence3 = 'The quick brown fox jumps over the lazy dog.';

const index3 = 4;

console.log(sentence3.charCodeAt(index3));
// UTF-16 code unit of "q" is integer 113

console.log(
    `Character code ${sentence3.charCodeAt(index3)} is equal to ${sentence3.charAt(
        index3,
    )}`,
);
// Expected output: "Character code 113 is equal to q"



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



/* String.prototype.includes()

The includes() method of String values performs a case-sensitive search 
to determine whether a given string may be found within this string, 
returning true or false as appropriate.

Syntax:
    includes(searchString)
    includes(searchString, position)

Parameters:

searchString
    A string to be searched for within str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.

position (Optional)
    The position within the string at which to begin searching for searchString. (Defaults to 0.)

Return value
    true if the search string is found anywhere within the given string, 
    including when searchString is an empty string; 
    otherwise, false. */

const sentence4 = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
    `The word "${word}" ${sentence4.includes(word) ? 'is' : 'is not'
    } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"

const word2 = 'rabbit';

console.log(
    `The word "${word2}" ${sentence4.includes(word2) ? 'is' : 'is not'
    } in the sentence`,
);



/* String.prototype.indexOf()

The indexOf() method of String values searches this string 
and returns the index of the first occurrence of the specified substring. 

It takes an optional starting position 
and returns the first occurrence of the specified substring 
at an index greater than or equal to the specified number. 

Syntax:
    indexOf(searchString)
    indexOf(searchString, position)

Parameters:

searchString
    Substring to search for. All values are coerced to strings, 
    so omitting it or passing undefined causes indexOf() to search for the string "undefined", 
    which is rarely what you want.

position (Optional)
    The method returns the index of the first occurrence of the specified substring 
    at a position greater than or equal to position, which defaults to 0. 
    If position is greater than the length of the calling string, 
    the method doesn't search the calling string at all. 
    If position is less than zero, the method behaves as it would if position were 0.
    
Return value
    The index of the first occurrence of searchString found, or -1 if not found. */

const paragraph1 = "I think Ruth's dog is cuter than your dog!";

const searchTerm1 = 'dog';
const indexOfFirst = paragraph1.indexOf(searchTerm1);

console.log(`The index of the first "${searchTerm1}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
    `The index of the second "${searchTerm1}" is ${paragraph1.indexOf(
        searchTerm1,
        indexOfFirst + 1,
    )}`,
);
// Expected output: "The index of the second "dog" is 38"



/* String.prototype.lastIndexOf()

The lastIndexOf() method of String values searches this string 
and returns the index of the last occurrence of the specified substring. 

It takes an optional starting position 
and returns the last occurrence of the specified substring 
at an index less than or equal to the specified number. 

Syntax:
    lastIndexOf(searchString)
    lastIndexOf(searchString, position)

Parameters:

searchString
    Substring to search for. All values are coerced to strings, 
    so omitting it or passing undefined causes lastIndexOf() 
    to search for the string "undefined", which is rarely what you want.

position (Optional)
    The method returns the index of the last occurrence of the specified substring 
    at a position less than or equal to position, which defaults to +Infinity. 
    If position is greater than the length of the calling string, the method searches the entire string. 
    If position is less than 0, the behavior is the same as for 0 — that is, 
    the method looks for the specified substring only at index 0. 
    
Return value
    The index of the last occurrence of searchString found, or -1 if not found. */

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

const searchTerm2 = 'dog';

console.log(
    `Index of the last ${searchTerm2} is ${paragraph2.lastIndexOf(searchTerm2)}`,
);
// Expected output: "Index of the last "dog" is 38"



/* String.prototype.padEnd()

The padEnd() method of String values pads this string with a given string (repeated, if needed) 
so that the resulting string reaches a given length. 

The padding is applied from the end of this string. 

Syntax:
    padEnd(targetLength)
    padEnd(targetLength, padString)

Parameters:

targetLength
    The length of the resulting string once the current str has been padded. 
    If the value is less than or equal to str.length, 
    the current string will be returned as-is.

padString Optional
    The string to pad the current str with. 
    If padString is too long to stay within targetLength, 
    it will be truncated: for left-to-right languages the left-most part 
    and for right-to-left languages the right-most will be applied. 
    The default value for this parameter is " " (U+0020).

Return value
    A String of the specified targetLength with the padString applied at the end of the current str.
*/


const str5 = 'Breaded Mushrooms';

console.log(str5.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str6 = '200';

console.log(str6.padEnd(5));
// Expected output: "200  "


