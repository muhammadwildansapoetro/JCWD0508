/* Number.NaN

The Number.NaN static data property represents Not-A-Number, which is equivalent to NaN. 
*/

function clean(x: any) {
    // eslint-disable-next-line use-isnan
    if (x === Number.NaN) {
        // Can never be true
        return null;
    }
    if (isNaN(x)) {
        return 0;
    }
}

console.log(clean(Number.NaN));
// Expected output: 0

