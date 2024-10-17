/* String.prototype.substring()

The substring() method of String values returns the part of this string from the start index up to and excluding the end index, 
or to the end of the string if no end index is supplied.
*/

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"


/* Examples

Using substring()
    The following example uses substring() to display characters from the string "Mozilla":
*/

const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // "M"
console.log(anyString.substring(1, 0)); // "M"

console.log(anyString.substring(0, 6)); // "Mozill"

console.log(anyString.substring(4)); // "lla"
console.log(anyString.substring(4, 7)); // "lla"
console.log(anyString.substring(7, 4)); // "lla"

console.log(anyString.substring(0, 7)); // "Mozilla"
console.log(anyString.substring(0, 10)); // "Mozilla"

/* Using substring() with length property */

const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"

/* The difference between substring() and substr() */

const text2 = "Mozilla";
console.log(text2.substring(2, 5)); // "zil"
console.log(text2.substr(2, 3)); // "zil"

/*Differences between substring() and slice() */

const text3 = "Mozilla";
console.log(text3.substring(5, 2)); // "zil"
console.log(text3.slice(5, 2)); // ""

/* If either or both of the arguments are negative or NaN, 
the substring() method treats them as if they were 0. */

console.log(text3.substring(-5, 2)); // "Mo"
console.log(text3.substring(-5, -2)); // ""

/* slice() also treats NaN arguments as 0, 
but when it is given negative values it counts backwards from the end of the string to find the indexes. */

console.log(text3.slice(-5, 2)); // ""
console.log(text3.slice(-5, -2)); // "zil"
