/*
Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

---

let str: string = "The QuiCk BrOwN Fox";

// Create an empty array to store the swapped characters
let swappedStr: string = "";

// Iterate through each character in the string
for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is uppercase and swap to lowercase, or vice versa
    if (char === char.toUpperCase()) {
        swappedStr += char.toLowerCase();
    } else {
        swappedStr += char.toUpperCase();
    }
}

console.log(swappedStr);  // Output: "tHE qUIcK bRoWn fOX"

---

1. We iterate over each character of the string using a for loop.

2. For each character, we check if it's uppercase by comparing it to char.toUpperCase().
    If it's uppercase, convert it to lowercase using toLowerCase().
    If it's lowercase, convert it to uppercase using toUpperCase().

3. The swapped characters are concatenated into swappedStr, and finally, the result is printed.
*/

let str: string = "The QuiCk BrOwN Fox"
let swappedStr: string = ""

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) { // Jika karakter ke-i upper case
        swappedStr += str.charAt(i).toLowerCase() 
        // maka value swappedStr i awal / i sebelumnya ditambah value swappedStr karakter ke-i dibuat lower case
    } else { // jika karakter ke-i tidak upper case 
        swappedStr += str.charAt(i).toUpperCase() 
        // maka value swappedStr i awal / i sebelumnya ditambah value swappedStr karakter ke-i dibuat upper case
    }
}

console.log(swappedStr)