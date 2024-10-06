/*
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/

function perimeterRec (length: number, width: number) {
    let p: number = 2 * (length + width)
    return `Rectangle with length: 5 & width: 3, have perimeter = ${p}`
}

console.log(perimeterRec(5, 3))