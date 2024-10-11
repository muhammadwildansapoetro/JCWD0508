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

    // map berisi key angka dengan value huruf (old phone button)
    const digitToLetter: { [key: string]: string[] } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "j", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    // jika tidak ada input, maka output array kosong
    if (digits.length === 0) {
        return [];
    }

    // membuat array untuk menyimpan kombinasi huruf
    let result: string[] = []

    // looping setiap digit pada input digits
    for (let item of digits) {
        console.log(item)

        // menyimpan value huruf dari key current digit
        const letter = digitToLetter[item]
        console.log(letter)
        // array sementara untuk menampung 
        const letterCombination: string[] = []

        // For each combination in the result, append each letter from the current digit's mapping
        for (let combination of result) {
            console.log(combination)

            for (let item of letter) {
                console.log(item)
                letterCombination.push(combination + letter)
            }
        }

        result = letterCombination
    }

    return result
};

console.log(letterCombinations("23"))



