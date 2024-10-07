/*
Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]

Primitive data types in JavaScript/TypeScript include:
- number
- string
- boolean
- undefined
- null
- symbol
- bigint

Non primitives:
- Objects
- arrays
- functions
*/

function primitive (arr: any[]) {
    return arr.filter(item => typeof item !== 'object' && typeof item !== 'function')
}

console.log(primitive([1, [], undefined, {}, "string", {}, []]))
