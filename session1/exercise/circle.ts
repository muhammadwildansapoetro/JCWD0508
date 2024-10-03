/*
Problem 3
Write a code to find diameter, circumference and area of a circle.

Hint:
Formula diameter of a circle = 2 * radius 
Formula circumference of a circle = 2 * 3.14159 * radius
Formula area of a circle = 3.14159 * (radius ** 2)

Solutions:
1. Create variable input:
- let radius = 5
- const pi = 3.14159
2. Create variable output:
- const diameter = 2 * radius
- const circumference = 2 * pi * radius
- const area = pi * (radius ** 2)
*/

let radius: number = 5
const pi: number = 3.14159

const diameter: number = 2 * radius
const circumference: number = 2 * pi * radius
const area: number = pi * (radius **2)

console.log(diameter, circumference, area)
