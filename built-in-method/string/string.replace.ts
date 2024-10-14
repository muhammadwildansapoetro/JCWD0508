/* String.prototype.replace()

The replace() method of String values returns a new string with one, some, 
or all matches of a pattern replaced by a replacement. 

The pattern can be a string or a RegExp, 
and the replacement can be a string or a function called for each match. 

If pattern is a string, only the first occurrence will be replaced. 
The original string is left unchanged.

Syntax:
    replace(pattern, replacement)

Parameters:

pattern
    Can be a string or an object with a Symbol.replace method — 
    the typical example being a regular expression. 
    Any value that doesn't have the Symbol.replace method will be coerced to a string.

replacement
    Can be a string or a function.
        If it's a string, it will replace the substring matched by pattern. 
            A number of special replacement patterns are supported; 
            see the Specifying a string as the replacement section below.
        If it's a function, it will be invoked for every match 
            and its return value is used as the replacement text. 
            The arguments supplied to this function are described 
            in the Specifying a function as the replacement section below.

Return value
    A new string, with one, some, or all matches of the pattern replaced by the specified replacement.
*/

const paragraph3 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph3.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph3.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

// example - Defining the regular expression in replace()

const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...

// example - Using the global and ignoreCase flags with replace()

const re2 = /apples/gi;
const str2 = "Apples are round, and apples are juicy.";
const newstr2 = str2.replace(re2, "oranges");
console.log(newstr2); // oranges are round, and oranges are juicy.

// example - Switching words in a string

const re3 = /(\w+)\s(\w+)/;
const str3 = "Maria Cruz";
const newstr3 = str3.replace(re3, "$2, $1");
console.log(newstr3); // Cruz, Maria

// example - Using an inline function that modifies the matched characters

function styleHyphenFormat(propertyName: string) {
    function upperToHyphenLower(match: any, offset: any, string: any) {
        return (offset > 0 ? "-" : "") + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

console.log(styleHyphenFormat('borderTop'))

// example - Replacing a Fahrenheit degree with its Celsius equivalent

function f2c(x: string) {
    function convert(str: string, p1: number, offset: any, s: any) {
        return `${((p1 - 32) * 5) / 9}C`;
    }
    const s = String(x);
    const test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}

console.log(f2c("212F"));
console.log(f2c("0F"));
