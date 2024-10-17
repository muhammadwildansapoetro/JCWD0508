/* String.prototype.includes()

The includes() method of String values performs a case-sensitive search 
to determine whether a given string may be found within this string, 
returning true or false as appropriate.
*/

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

// example

const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true