/*
    test1
    input = [1,2,3,4,5,6]
    output = [6,1,5,2,4,3]

    test2
    input = [11,21,22,5,30,14]
    output = [30,5,22,11,21,14]
*/

function sort(arr: number[]) {
    arr.sort((a, b) => a - b)
    const res: number[] = []

    for (let i = 0; i < arr.length / 2; i++) {
        console.log(i);

        res.push(arr[arr.length - 1 - i])
        res.push(arr[i])
    }

    return res
}

console.log(sort([1, 2, 3, 4, 5, 6]))
// console.log(sort([11,21,22,5,30,14]))