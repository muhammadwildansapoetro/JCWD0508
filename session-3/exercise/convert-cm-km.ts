/*
Problem:
Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”

Hint:
100000 centimeter = 1 kilometer

Solving:
1. Define and assign input variable
    const inputCentimeter = 100000
2. Define and assign output variable
    let outputKilometer = inputCentimeter / 100000
*/

const inputCentimeter: number = 100000
let outputKilometer: number = inputCentimeter / 100000

console.log(`${inputCentimeter} centimeter is ${outputKilometer} kilometer`)