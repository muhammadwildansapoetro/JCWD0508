/*
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. 

The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:
- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

function romanToInt(strRoman: string): number {

    const romanNum: { [key: string] : number } = { // object untuk menyimpan value number dari roman symbol string
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let total: number = 0 // penampung hasil akhir
    let prevNum: number = 0 // penampung sementara untuk mengecek value sebelum dengan value terakhir yang dicek

    for (let i = strRoman.length - 1; i >= 0; i--) { // loop mengecek semua character str, dimulai dari belakang

        const currentNum: number = romanNum[strRoman[i]] // mengambil value number di object romanNum dengan key character strRoman ke-i

        if (prevNum > currentNum) { // jika number sebelumnya lebih kecil dari currentNum (untuk cek IV = 4, IX = 9, dst)
            total -= currentNum // total dikurangi currentNum, misal total = 5, prevNum = 5 , currentNum = 1, maka 5 - 1 = 4  
        } else { 
            total += currentNum // selain itu, total ditambahkan currentNum
        }
        prevNum = currentNum // prevNum menjadi currentNum untuk pengecekan / iteration selanjutnya (mundur)
    }

    return total 
};

console.log(romanToInt('IXIX'))
