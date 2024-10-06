/*
Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height

*/

function trianglePattern (height: number) {
    let output: string = ""
    let count: number = 1

    for (let i = 1; i <= height; i++) { 
        let row: string = "" 

        for (let j = 1; j <= i; j++) { 
            row += count.toString().padStart(2, "0") + " "
            count++
        }
        if (i !== height) {
            row += `\n`
        }
        output += row
    }
    return output
}

console.log(trianglePattern(7))