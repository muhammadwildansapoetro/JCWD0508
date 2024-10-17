/* Array.prototype.reduce()

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. 
Otherwise the array element at index 0 is used as the initial value 
and iteration starts from the next element (index 1 instead of index 0). */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// How reduce() works without an initial value

const array = [15, 16, 17, 18, 19];

function reducer(accumulator: number, currentValue: number, index: number) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);

// How reduce() works with an initial value

[15, 16, 17, 18, 19].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    10,
);


// Sum of values in an object array

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0,
);

console.log(sum); // 6

