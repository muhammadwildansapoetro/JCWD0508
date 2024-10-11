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
    let output: string = "" // This stores the final pattern
    let count: number = 0 // This counts and tracks the numbers printed

    for (let i = 1; i <= height; i++) { // This loop runs from 1 to height, representing each row of the triangle.
        console.log(i)
        let row: string = "" // This will store the current row pattern
        // A new row string is created to hold the numbers for the current row. It resets for each row.

        for (let j = 1; j <= i; j++) { // Inner Loop (for columns)
            count++
            console.log(count)
            row += count.toString().padStart(2, "0") + " "
                console.log(row)
        }
        if (i !== height) {
            row += `\n`
                console.log(row)
        }
        output += row
            console.log(output)
    }

    return output
}

console.log(trianglePattern(3))

// other way

function trianglePattern2 (height: number) {
    let result: string = ""
    let counter: number = 0

    for (let i = 1; i <= height; i++) { // loop mulai dari i = 1, running selama i <= height, i + 1 setiap iteration
        console.log(i)
        let res: string = ""

        for (let j = 1; j <= i; j++) { 
            console.log(j)
            counter++
            if (counter < 10) {
                res += `0${counter} `
                    console.log(res)
            } else {
                res += `${counter} `
                    console.log(res)
            }
        }
        if (i !== height) {
            res += `\n`
                console.log(res)
        }
        result += res
            console.log(result)
    }

    console.log(result)
    console.log(counter)

    return result
}

console.log(trianglePattern2(3))