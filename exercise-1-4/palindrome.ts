/*
Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome
*/

function palindromeChecker (input: string) {
    let res: string = ""
    let split: string[] = input.split("")
        console.log(split)
    let reverse: string[] = split.reverse()
        console.log(reverse)
    let join: string = reverse.join("")
        console.log(join)
    if (input == join) {
        res = `${input} is a palindrome`
    } else {
        res = `${input} is not a palindrome`
    }
    return res
}

console.log(palindromeChecker("kasur rusak"))