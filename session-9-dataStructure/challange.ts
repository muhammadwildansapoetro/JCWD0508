/*
    a = 1
    b = 2
    c = 3
    ...
    z = 26

    input = "abcd"
    output = 10
*/

function sumLetterPosition(input: string): any {

    // membuat object untuk map setiap huruf (key) dan angkanya (value)
    const letterPosition: { [key: string]: number } = {}

    // looping untuk mengisi object map letterPosition
    for (let i = 0; i < 26; i++) {
        // Mengubah dari unicode code point (ASCII) menjadi karakter huruf
        // dengan menambah i (loop i 0 sampai 25), kita input semua huruf kecil (ASCII value)
        // mengisi object map letterPosition [key] = value
        // String.fromCharCode((97 + 0) = "a" ---? 0 + 1 = 1 ---> "a" = 1
        letterPosition[String.fromCharCode(97 + i)] = i + 1; // 'a' is 97 in ASCII
    }

    // vairabel penampung jumlah semua nilai huruf
    let sum = 0;

    // looping setiap huruf dari input untuk menjumlah nilai setiap huruf di input
    for (let letter of input.toLowerCase()) {
        if (letterPosition[letter]) {
            sum += letterPosition[letter]
        } else {
            sum += 0
        }
    }

    return sum
};

console.log(sumLetterPosition("abcd.!@"))
console.log(sumLetterPosition("A"))
console.log(sumLetterPosition("a"))
console.log(sumLetterPosition("z"))
console.log(sumLetterPosition(""))
console.log(sumLetterPosition("!@#$%^&*()"))
console.log(sumLetterPosition("bandung"))

///---

const input: string = "abcd"

for (let letter of input) {
    console.log(letter)
}

console.log(String.fromCharCode(97 + 0))
console.log(String.fromCharCode(97 + 1))
console.log(String.fromCharCode(97 + 2))
console.log(String.fromCharCode(97 + 3))