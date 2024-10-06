/*
Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/

function areaRec (length: number, width: number) {
    let a: number = length * width // area rectangle
    return `Rectangle with length: ${length} & width: ${width}, have area = ${a}`
}

console.log(areaRec(5, 3))
console.log(areaRec(4, 2))
console.log(areaRec(7, 4))