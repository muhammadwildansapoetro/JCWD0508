/*
    anggap jumlah element array input pasti genap

    test1
    input = [1,2,3,4,5,6]
    output = [6,1,5,2,4,3]

    test2
    input = [11,21,22,5,30,14]
    output = [30,5,22,11,21,14]
*/

function sort(input: number[]): number[] {

    input.sort((a, b) => a - b)

    let leftIdx: number = 0
    let rightIdx: number = input.length - 1

    let output: number[] = []

    while (leftIdx <= rightIdx) {

        if (leftIdx != rightIdx) {
            output.push(input[rightIdx])
            rightIdx--
            output.push(input[leftIdx])
            leftIdx++
        }
        // jika input ganjil, maka angka terakhir dimasukkan angka terbesar terakhir
        else {
            output.push(input[leftIdx])
            leftIdx++
        }
    }

    return output
}

console.log(sort([1, 2, 3, 4, 5, 6]))
// console.log(sort([11, 21, 22, 5, 30, 14]))