/*
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

function letterCombinations(digits: string): string[] {

    // object sebagai map yang berisi key-value = angka-huruf (old phone button)
    const digitLetter: { [key: string]: string[] } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    // console.log(digits.length)
    // jika tidak ada input, maka output array kosong. Jika ada input, lanjut.
    if (digits.length === 0) {
        return [];
    }

    // inisialisasi array "result" dengan string kosong ("") untuk bisa mulai enyusun kombinasi huruf
    // array "result" sebagai penampung hasil akhir
    let result: string[] = [""]

    // looping setiap digit pada input "digits"
    for (let digit of digits) { // looping for...of bisa untuk tipe data "string"
        // console.log(digit)
        // menyimpan value-key setiap digit dari "digits" (map digitLetter) di array "letters"
        const letters: string[] = digitLetter[digit]
        // console.log(letters)
        // array penampung sementara untuk menyimpan kombinasi, nantinya dimasukkan ke array "result"
        const letterCombination: string[] = []

        // loopinng setiap kombinasi di "result"
        for (let combination of result) {
            // console.log(combination)
            // looping setiap letter dii "letters", untuk menambahkan kombinasi huruf
            for (let letter of letters) {
                // console.log((letter))
                //  tambahkan combination + letter ke array "letterCombination"
                letterCombination.push(combination + letter)
                // console.log(letterCombination)
            }
        }

        result = letterCombination
    }

    return result
};

console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))



