/* Array.prototype.findIndex()

The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
*/

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element: any) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

// Find the index of a prime number in an array

function isPrime(element: any) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

// Using the third argument of callbackFn

const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
    .filter((num) => num > 0)
    .findIndex((num, idx, arr) => {
        // Without the arr argument, there's no way to easily access the
        // intermediate array without saving it to a variable.
        if (idx > 0 && num >= arr[idx - 1]) return false;
        if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
        return true;
    });
console.log(firstTrough); // 1

