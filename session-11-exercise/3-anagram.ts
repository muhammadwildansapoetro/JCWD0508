/* Exercise 3 - Anagram

● Given two strings s and t, return true if t is an anagram of s, and false otherwise.

● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

● Example 1:
    ○ Input: s = "anagram", t = "nagaram"
    ○ Output: true

● Example 2:
    ○ Input: s = "rat", t = "car"
    ○ Output: false
*/

function anagramChecker(s: string, t: string) {

    if (s.length !== t.length) {
        return false
    }

    const sortedS: string = s.toLowerCase().split("").sort().join("")
    const sortedT: string = t.toLowerCase().split("").sort().join("")

    return sortedS === sortedT

}

console.log(anagramChecker("anagram", "nagaram"))
console.log(anagramChecker("rat", "car"))

// ---

function anagramCheck(s: string, t: string) {
    const sortedInput = (str: string) => str.toLowerCase().split("").sort().join("")

    return sortedInput(s) === sortedInput(t)
}

console.log(anagramCheck("AnagRam", "naGaraM"))
console.log(anagramCheck("rat", "car"))
console.log(anagramCheck("Garam", "mArga"))



