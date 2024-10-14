/*
    a = 1
    b = 2
    c = 3
    ...
    z = 26

    input = "abcd"
    output = 10
*/

function myFunc(str: string) {
    const alpha: string[] = " abcdefghijklmnopqrstuvwxyz".split("")

    return str.split("")
        .map(item => alpha.indexOf((item.toLowerCase())))
        .reduce((a, b) => a + b)
}

console.log(myFunc("Bandung"))

// ---

console.log("a".charCodeAt(0))
console.log("A".charCodeAt(0))