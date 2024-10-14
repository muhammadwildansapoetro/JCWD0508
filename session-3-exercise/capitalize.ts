/*
Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”

---

let str: string = "hello world from typescript";

// Split the string into words
let words: string[] = str.split(' ');

// Iterate through each word and capitalize the first letter
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

// Join the words back into a string
let capitalizedStr: string = words.join(' ');

console.log(capitalizedStr);  // Output: "Hello World From Typescript"

---

1. The split(' ') method splits the string into an array of words.

2. The for loop iterates over each word, capitalizes the first character using words[i][0].toUpperCase() 
and concatenates the rest of the word using slice(1).

3. join(' ') re-joins the words into a single string with spaces.

*/

const str: string = "hello student purwadhika bandung"

let res: string = ""

/*
Hint:
- huruf yang harus kapital adalah karakter ke-0
- huruf setelah space harus kapital
*/

for (let i = 0; i < str.length; i++) {
    if (i == 0 || str.charAt(i - 1) == " ") { // jika huruf pertama atau huruf yang sebelumnya spasi
        res += str.charAt(i).toUpperCase() // 
        // maka value res awal / sebelumnya ditambah value str yang char ke-i dibuat upper case
    } else { // jika bukan huruf pertama atau huruf yang sebelumnya bukan spasi
        res += str.charAt(i).toLocaleLowerCase()
        // maka value res awal / sebelumnya ditambah value str yang char ke-i dibuat lowercase
    }
}

console.log(res)




// other way

// let isCapital: boolean = true

// for (let i = 0; i < str.length; i++) {
//     if (isCapital) {
//         res += str.charAt(i).toUpperCase() // karakter ke-i = 0 upper case
//         isCapital = false // setelah karakter  ke-i = 0 kapital, maka isCapital = false agar karakter lain tidak kapital
//     } else {
//         res += str.charAt(i).toLocaleLowerCase() // jika isCapital false, maka karakter ke-i dibuat lower case
//     }
//     if (str.charAt(i) == " ") { 
//         isCapital = true // jika karakter ke-i  adalah spasi " ", maka isCapital jadi true dan karakter ke-i berikutnya upper case
//     }
// }

// console.log(res)