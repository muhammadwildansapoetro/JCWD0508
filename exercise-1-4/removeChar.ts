/*
Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
*/

function removeChar (str: string, searchStr: string) {
    let res: string = str.replace(searchStr, "")
    console.log(res)
    return `Remove "${searchStr}" from "${str}" become ${res}`
}

console.log(removeChar("Hello world", "ell"))

// other way