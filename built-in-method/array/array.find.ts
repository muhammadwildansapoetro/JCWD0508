/* Array.prototype.find()

The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use some().
If you need to find all elements that satisfy the provided testing function, use filter().
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

// Find an object in an array by one of its properties

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit: any) {
    return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

//Using arrow function and destructuring

const inventory2 = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

const result = inventory2.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// Find a prime number in an array

function isPrime(element: any, index: any, array: any) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// Using the third argument of callbackFn

const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
    .filter((num) => num > 0)
    .find((num, idx, arr) => {
        // Without the arr argument, there's no way to easily access the
        // intermediate array without saving it to a variable.
        if (idx > 0 && num >= arr[idx - 1]) return false;
        if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
        return true;
    });
console.log(firstTrough); // 1

