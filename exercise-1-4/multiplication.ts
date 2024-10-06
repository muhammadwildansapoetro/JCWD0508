/*
Write a code to display the multiplication table of a given integer.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ …
■ 9 x 10
*/

function multiplication (number: number, limit: number) {
    let res: string = ""
        for (let i = 1; i <= limit; i++) {
            let output: number = number * i
                if (i < limit) {
                    res += `${number} x ${i} = ${output}` + `\n`
                } else {
                res += `${number} x ${i} = ${output}`
                }
        }
    return res
}

console.log(multiplication(9, 10))
