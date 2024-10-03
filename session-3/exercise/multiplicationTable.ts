/*
Problem:
Write code to display multiplication table of a given integer
Example: Given integer is 9

Hint:
1. Find out what is multiplication table
2. Multiplication table formula with example input 9
    9 x 1 = 9
    9 x 2 = 18
    9 x n = 9n
    9 n 10 = 90
3. Convert 9 as a constant variables and set 10 as a limit of multiplication
    const input = 9
    const limit = 10
4. Define the loops rule
    for (let i = 1; i <= limit; i++)

Solving:
1. Define and assing variable for input and limit
    const input = 9
    const limit = 10
2. Since we would like to create multiplication from 1 until 10 
   and multiply by input, lets create the loop starting with 1 and stop on 10.
3. Since we already define the limit as 10, lets use that variables
    FOR (let i = 1; i <= limit; i++)
4. Print out the multiplication based on input with index of loop starting with 1
    OUTPUT input x i
5. Close the looping statement after showing the output
    END FOR
*/

const inputNumber: number = 9 
const limit: number = 10

for (let i = 1; i <= limit; i++) {
    let output = inputNumber * i
    console.log(`${inputNumber} x ${i} = ${output}`)
    // or
    console.log(`${inputNumber} x ${i} = ${inputNumber * i}`)
}

