/* Exercise 1 - Column Number

● Create a function to convert Excel sheet column title to its corresponding column number.

● Example :
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    …

● Example :
    ○ Input : AB
    ○ Output : 28 
*/

function columnNum(column: string) {
    let result: number = 0

    for (let i = 0; i < column.length; i++) {
        const charNum: number = column.charCodeAt(i) - 64 // "A" = 65, agar value "A" jadi 1, maka dikurangi 64
        result = (result * 26) + charNum // (number * 26) karena "Z" = 26, maka nomor column selanjutnya ditambah 26
    }

    return result
}

const input1: string = "A"
const input2: string = "Z"
const input3: string = "AA"
const input4: string = "AZ"

console.log(columnNum(input1));
console.log(columnNum(input2));
console.log(columnNum(input3));
console.log(columnNum(input4));

// simplified

function columnNumber(column: string) {
    let result: number = 0

    for (let i = 0; i < column.length; i++) {
        return (result * 26) + (column.charCodeAt(i) - 64)
        // (result * 26) karena "Z" = 26, maka nomor column selanjutnya ditambah 26
        // (column.charCodeAt(i) - 64) karena "A" = 65, agar value "A" jadi 1, maka dikurangi 64
    }
}

const Input1: string = "A"
const Input2: string = "Z"
const Input3: string = "AA"
const Input4: string = "AZ"

console.log(columnNum(Input1));
console.log(columnNum(Input2));
console.log(columnNum(Input3));
console.log(columnNum(Input4));
