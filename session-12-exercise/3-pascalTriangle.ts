/*
● Given an integer numRows, return the first numRows of
Pascal's triangle.

● In Pascal's triangle, each number is the sum of the two
numbers directly above it as shown →

● Example 1:
    ○ Input: numRows = 5
    ○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

● Example 2:
    ○ Input: numRows = 1
    ○ Output: [[1]]
*/

function pascalTriangle(numRows: number): number[][] {
    const triangle: number[][] = []

    // loop to create each row
    for (let i = 0; i < numRows; i++) {
        const row: number[] = []

        // each row start and end with 1
        row[0] = 1
        row[i] = 1

        // fill between number 1 ... 1 each row, start from third row
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        }

        console.log(row);

        triangle.push(row)
    }

    return triangle
}

console.log(pascalTriangle(5));
console.log(pascalTriangle(1));

function printPascalTriangle(triangle: number[][]) {
    const maxRow: number = triangle.length

    triangle.forEach((row, rowIndex) => {
        // calculate space to print before row to center it
        const spaces: string = " ".repeat(maxRow - rowIndex - 1)

        // join row numbers with space and add leading spaces
        console.log(spaces + row.join(" "));
    })
}

const triangle1 = pascalTriangle(5)
const triangle2 = pascalTriangle(1)

printPascalTriangle(triangle1)
printPascalTriangle(triangle2)
