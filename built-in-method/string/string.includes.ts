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