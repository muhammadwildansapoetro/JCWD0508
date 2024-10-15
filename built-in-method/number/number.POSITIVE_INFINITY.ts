/* Number.POSITIVE_INFINITY

The Number.POSITIVE_INFINITY static data property represents the positive Infinity value.
*/

function checkNumber(bigNumber: number) {
    if (bigNumber === Number.POSITIVE_INFINITY) {
        return 'Process number as Infinity';
    }
    return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// Expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// Expected output: "Process number as Infinity"
