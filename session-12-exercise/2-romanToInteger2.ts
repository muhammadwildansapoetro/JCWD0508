/* 
● Create a function to convert roman numeral to integer.

● Example 1:
    ○ Input: s = "III”
    ○ Output: 3
    ○ Explanation: III = 3.

● Example 2:
    ○ Input: s = "LVIII"
    ○ Output: 58
    ○ Explanation: L = 50, V= 5, III = 3.

● Example 3:
    ○ Input: s = "MCMXCIV"
    ○ Output: 1994
    ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

function romanToInteger(str: string) {

    const roman: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let res = 0

    for (let i = 0; i < str.length; i++) {
        const curr = roman[str.charAt(i)]
        const next = roman[str.charAt(i + 1)]

        curr < next ? res -= curr : res += curr
    }

    return res
}

console.log(romanToInteger("VIII"));
console.log(romanToInteger("IX"));
console.log(romanToInteger("IV"));
