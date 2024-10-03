/*
Problem:
Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6

Hint:
- Use loop statement, 
- First value resul + loop result
- Stop loop when i 

Solution
1. Create input variable and assign value data type number
2. Create loop statement
   for (i = 1; i < n; i++)
*/

let n: number = 3
let result: number = 0

for (let i = 0; i <= n; i++) {
    result += i // result = result + i
    console.log(result)
}

console.log(result)

/*
i = 0; 0 <= 3 = true,
    result = result + i = 0 + 0 = 0
        then i + 1 = 0 + 1 = 1
i = 1; 1 <= 3 = true,
    result = 1 + 1 = 2
        then i + 1 = 2 + 1 = 3
i = 3; 3 <= 3 = true,
    result = 3 + 3 = 6
        then i + 1 = 3 + 1 = 4
i = 4; 4 <= 3 = false,
    stop looping
*/


const num: number = 5

let Result: number = 0
let string: string = ""

for (let i = 1; i <= num; i++) {
    Result += i
    if (i == 1) {
        string += "1"
    } else {
        string += ` + ${i}`
    }
}

console.log(`${string} = ${Result}`)