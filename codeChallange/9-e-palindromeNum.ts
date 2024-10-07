/*
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
    if (x < 0) {
        return false
    }

    const xStr: string = x.toString()

    let xReversed: string = x.toString().split("").reverse().join("")
      
    return xStr === xReversed

}

console.log(isPalindrome(121))

    // let xStrArr: string[] = xStr.split("")
    // let xStrArrJoin: string = xStrArr.join("")
    //     console.log(xStrArrJoin)

    // let reverse: string[] = xStrArr.reverse()
    // let reverseJoin: string = reverse.join("")
    //     console.log(reverseJoin)

    // let output: boolean = true

    // if (xStrArrJoin === reverseJoin) {
    //     output = true  
    // } else {
    //     output = false
    // }
    
    // return output

