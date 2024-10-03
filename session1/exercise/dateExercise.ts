/*
Problem 5
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).

Hint
- How convert days to years, months and days
- Formula years = (days / 365) - (days % 365)
- Formula months = (days % 365) / 30 - ((days % 365) % 30)
- Formula days = (days % 365)

Solution
1. Create variable input
let days = 
2. Create variable output, assign formula
- const years = (days / 365) - ((days % 365) / 365)
- const months = ((days % 365) / 30) - (((days % 365) % 30) / 30)
- const days = ((days % 365) % 30)
*/

let days: number = 400

const years: number = (days / 365) - ((days % 365) / 365)
const months: number = ((days % 365) / 30) - (((days % 365) % 30) / 30)
const daysOutput: number = ((days % 365) % 30)

const result: string = `${years} year, ${months} month, ${daysOutput} days`

console.log(result)

console.log(Math.floor(1.9)) // Membulatkan ke bawah
console.log(Math.ceil(1.1)) // Membulatkan ke atas
console.log(Math.round(5.6)) // Membulatkan sesuai aturan matematika

/*
Problem 6
Write a code to get difference between dates in days

Hint
Convert date to number


Solution
1. Create variable input
- let date1
- let date2
2. Create variable convert
- const date1Number
- const date2Number
3. Create variable output
- const difference = date2Number - date1Number 
*/

const date1: Date = new Date("2024-10-01")
const date2: Date = new Date("2024-10-17")

const diff: number = date2.getTime() - date1.getTime()

console.log(diff / (24 * 60 * 60 * 1000))