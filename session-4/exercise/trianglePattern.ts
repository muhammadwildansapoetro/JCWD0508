/*
Create a function that can create a triangle pattern according to the height we provide like the
following :
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

● Parameters : height → triangle height
● Example input: 5
*/

function triangle (height: number) {
    let result: string = ""
    for (let i = 1; i <= height; i++) {
        let res: string = ""
        for (let j = 1; j <= i; j++) {
            res += `${j} `
        }
        if (i !== height) res += `\n` 
        result += res
    }
    return result
}

console.log(triangle(5))

function trianglePattern (height: number) {
    let num = 1
    for (let i = 1; i <= height; i++) {
        let row = ""
        for (let j = 1; i <= i; j++) {
            row += num.toString().padStart(2, "0") + " "
            num++
        }
        console.log(row.trim())
    }
}

console.log(trianglePattern(3))