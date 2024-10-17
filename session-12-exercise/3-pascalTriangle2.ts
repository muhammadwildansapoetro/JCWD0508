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

function pascal(n: number) {
    const res: any[] = []

    for (let i = 0; i < n; i++) { // height of triangle
        const arr = []
        for (let j = 0; j <= i; j++) { // row
            if (j == 0 || j == i) {
                arr.push(1)
            } else {
                arr.push(res[i - 1][j - 1] + res[i - 1][j])
            }
        }
        res.push(arr)
    }

    return res
}

console.log(pascal(5));
