/*
Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
*/

function currency (number: number) {
    let res: string = ""
        console.log(res)
    let numString: string = number.toString()
        console.log(numString)
        console.log(numString.length)
        console.log(numString.charAt(8))
    let count: number = 0
    for (let i = numString.length - 1; i >= 0; i--) {
        if (count % 3 == 0 && count !== 0) {
            res = "." + res
        }
        res = numString.charAt(i) + res
            console.log(res)
        count++
    }
    return `${number} = Rp ${res},00`
}

console.log(currency(123456789))

// other way

function currency2 (number: number) {
    let res: string = number.toLocaleString("id-ID", {style: "currency", currency: "IDR"})
    console.log(res)
    return `${number} = ${res}`
}

console.log(currency2(123456789))