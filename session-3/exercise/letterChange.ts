/*
Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

const str: string = "An apple a day keeps the doctor away"
let res: string = ""

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "a" || str.charAt(i) === "A") {
        res += str.charAt(i).replace(str.charAt(i),"*")
    } else {
        res += str.charAt(i)
    }
    console.log(res)
}

console.log(res)

// other way

const Res: string = str.replace(/a/gi, "*") 
// regEx = "/a/gi" = semua huruf "a" (g = global) dan non case sensitive (i)
// .replace(/a/gi, "*") = replace semua huruf "a" atau "A" menjadi "*" 

console.log(Res)

// Menghilangkan karakter selain alfabet + spasi

const letter: string = "Hello@ Stu?dent Purwa4dhika"

console.log(letter.replace(/[^a-zA-z\s]/g, ""))

// Menghilangkan karakter selain alfabet + spasi + angka

console.log(letter.replace(/[^a-zA-z0-9\s]/g, ""))