/*
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/

function perimeterRec (length: number, width: number) {
    return (2 * (length + width))
}

const res: number = perimeterRec(5, 3)

console.log(res)