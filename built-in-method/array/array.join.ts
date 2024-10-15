/* Array.prototype.join()

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

/*
Syntax
js
Copy to Clipboard
join()
join(separator)
Parameters
separator Optional
A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").

Return value
A string with all array elements joined. If array.length is 0, the empty string is returned.
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
