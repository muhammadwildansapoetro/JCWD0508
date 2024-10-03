/*
Problem:
Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
*/

const input: number = 1234567

let currencyIDR: string = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
}).format(input)

console.log(currencyIDR)

// other way with .toLocaleString

console.log(input.toLocaleString("id-ID", {style: "currency", currency: "IDR"}))

// other way with loop statement and if statement

const num: number = 123456789
const numStr: string = num.toString()
let count: number = 0
let res: string = ""

for (let i = numStr.length - 1; i >= 0; i--) {
    if (count % 3 == 0 && count > 0) {
        res = "." + res
    }
    res = numStr.charAt(i) + res
    count++
    console.log(res)
}

console.log(`Rp ${res},00`)


