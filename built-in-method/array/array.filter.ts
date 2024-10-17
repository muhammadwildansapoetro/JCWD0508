/* Array.prototype.filter()

The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// Filtering out all small values

function isBigEnough(value: number) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// Find all prime numbers in an array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num: number) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// Searching in array

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// Filter array items based on search criteria (query)

function filterItems(arr: string[], query: string) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

