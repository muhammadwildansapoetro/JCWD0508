/* String.prototype.lastIndexOf()

The lastIndexOf() method of String values searches this string 
and returns the index of the last occurrence of the specified substring. 

It takes an optional starting position 
and returns the last occurrence of the specified substring 
at an index less than or equal to the specified number. 

Syntax:
    lastIndexOf(searchString)
    lastIndexOf(searchString, position)

Parameters:

searchString
    Substring to search for. All values are coerced to strings, 
    so omitting it or passing undefined causes lastIndexOf() 
    to search for the string "undefined", which is rarely what you want.

position (Optional)
    The method returns the index of the last occurrence of the specified substring 
    at a position less than or equal to position, which defaults to +Infinity. 
    If position is greater than the length of the calling string, the method searches the entire string. 
    If position is less than 0, the behavior is the same as for 0 — that is, 
    the method looks for the specified substring only at index 0. 
    
Return value
    The index of the last occurrence of searchString found, or -1 if not found. */

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

const searchTerm2 = 'dog';

console.log(
    `Index of the last ${searchTerm2} is ${paragraph2.lastIndexOf(searchTerm2)}`,
);
// Expected output: "Index of the last "dog" is 38"