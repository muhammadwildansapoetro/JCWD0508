/* Number.NEGATIVE_INFINITY

The Number.NEGATIVE_INFINITY static data property represents the negative Infinity value.
*/

function checkNumber(smallNumber: number) {
    if (smallNumber === Number.NEGATIVE_INFINITY) {
        return 'Process number as -Infinity';
    }
    return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));
// Expected output: -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));
// Expected output: "Process number as -Infinity"

