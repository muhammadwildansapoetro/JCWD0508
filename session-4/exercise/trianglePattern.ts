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
    for (let i = 1; i <= height; i++) {
        let res: string = ""
        for (let j = 1; j <= i; j++) {
            res += `${j} `
        }
        console.log(res)
    }
}

triangle(5)