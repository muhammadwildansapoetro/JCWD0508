/*
Create a function to check if two objects are equal

● Example
○ Input : { a: 2 } & { a: 1 }
○ Output: false

● Example
○ Input : { a: “Hello” } & { a: 1 }
○ Output: false

● Example
○ Input : { a: 1 } & { a: 1 }
○ Output: true
*/

/*
1. mencari key yang sama
2. mencari key-value yang sama
3. object tidak bisa dicompare
*/

interface Input {
    [key: string]: any // flexible tipe data
}

const obj1: Input = { a: 1, b: 2 }
const obj2: Input = { a: 1, c: 3 }

function isEqual (obj1: Input, obj2: Input) {
    
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(isEqual(obj1, obj2))
