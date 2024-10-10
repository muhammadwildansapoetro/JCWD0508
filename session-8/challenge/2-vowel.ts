/*
    mencari jumlah huruf vocal

    input: "Purwadhika"
    output: 4

    input: "Bandung"
    ouuput: 2
*/

function vowelCounter (input: string) {

    const inputArr = input.split("")
        console.log(inputArr)
    
    const vowel = ["a", "i", "u", "e", "o"]

    let output: number = 0

    // looping semua element inputArr
    inputArr.forEach((item) => {
        // jika element di inputArr ada huruf vokal yang ada di variabel vocal
        if (vowel.includes(item)) {
            // maka value output tambah 1
            output++
        }
    })

    return output
}

console.log(vowelCounter("Purwadhika"))
console.log(vowelCounter("Bandung"))
console.log(vowelCounter("aiueo"))
console.log(vowelCounter("bcdfghj"))

/*
inputArr.forEach((item) => {
        if (censorWord.includes(item.toLowerCase())) {
            console.log(censorWord.includes(item.toLocaleLowerCase()))
            const first = item.charAt(0)
            const last = item.charAt(item.length - 1)
            const middle = "*".repeat(item.length - 2)
            output.push(first + middle + last)
        } else {
            output.push(item)
        }
*/