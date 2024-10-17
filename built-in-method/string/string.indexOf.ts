/* String.prototype.indexOf()

The indexOf() method of String values searches this string 
and returns the index of the first occurrence of the specified substring. 

It takes an optional starting position 
and returns the first occurrence of the specified substring 
at an index greater than or equal to the specified number. 
*/

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

// example 1 - Using indexOf()

const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6

// example 2 - indexOf() and case-sensitivity

const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1

// example 3 - Using indexOf() to count occurrences of a letter in a string

const str2 = "To be, or not to be, that is the question.";
let count = 0;
let position = str2.indexOf("e");

while (position !== -1) {
    count++;
    position = str2.indexOf("e", position + 1);
}

console.log(count); // 4
