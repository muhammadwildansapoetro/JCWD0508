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

function romanToInteger(strRoman: string): number {

    const romanNum: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total: number = 0
    let prevNum: number = 0

    for (let i = strRoman.length - 1; i >= 0; i--) {
        console.log(i);

        const currentNum: number = romanNum[strRoman[i]]
        console.log(currentNum);

        if (prevNum > currentNum) { // for case IV, IX, etc
            total -= currentNum
        } else {
            total += currentNum
        }
        console.log(total);

        prevNum = currentNum
    }

    return total
};

console.log(romanToInteger("III"));
// console.log(romanToInteger("LVIII"));
// console.log(romanToInteger("MCMXCIV"));

