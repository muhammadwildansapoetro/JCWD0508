/*
9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

function isPalindrome(x: number): boolean {
    if (x < 0) { // jika x kurang dari 0
        return false // maka return false = not palindrome
    }

    const xStr: string = x.toString() // x convert ke string agar bisa di-compare dengan value x yang reversed (xReversed)

    let xReversed: string = x.toString().split("").reverse().join("") // x jadi string - jadi array - array di-reverse - jadi string
      
    return xStr === xReversed // jika value x string sama dengan value x string reversed, maka true = palindrome

}

console.log(isPalindrome(121))

