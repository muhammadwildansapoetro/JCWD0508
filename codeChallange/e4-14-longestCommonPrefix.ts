/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(strs: string[]): string {
    
    if (strs.length === 0) {
        return ""
    }

    let prefix: string = strs[0] // asumsi strs[0] adalah common prefix

    for (let i = 1; i < strs.length; i++) { // loop mengecek semua element di array strs
        console.log(i)

        while (strs[i].indexOf(prefix) !== 0) // selama strs[i] tidak sama dengan prefix
             prefix = prefix.slice(0, prefix.length - 1) // maka delete character terakhir string prefix 
                console.log(prefix)
        
        if (prefix === "") { // jika string prefix di-delete sampai habis ""
            return "" // maka hasilnya tidak ada kosong "" = tidak ada common prefix (awalan yang sama)
        }
    }

    return prefix
};


console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["MNV-KNB-001","MNV-JAM-002","MNV-ERA-003"]))