/*
Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
*/

function convert (input: number) {
    let inputStr: string = input.toLocaleString("id-ID")
    let output: number = input / 100000
    return `${inputStr} centimeter is ${output} kilometer`
}

console.log(convert(100000))