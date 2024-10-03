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

/*

let inputStr: string = 'An apple a day keeps the doctor away';

// Create an empty string to store the result
let resultStr: string = "";

// Iterate through each character in the input string
for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];

    // Replace 'a' or 'A' with '*'
    if (char === 'a' || char === 'A') {
        resultStr += '*';
    } else {
        resultStr += char; // Otherwise, keep the character unchanged
    }
}

console.log(resultStr);  // Output: "*n *pple * d*y keeps the doctor *w*y"

*/
