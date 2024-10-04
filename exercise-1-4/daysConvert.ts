/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/

function daysConvert (inputDays: number) {
    let year: number = (Math.floor(inputDays / 365))
    console.log(year)
    let month: number = (Math.floor((inputDays - 365) / 30))
    console.log(month)
    let days: number = (Math.floor(inputDays % 365 % 30))
    return `${inputDays} days is ${year} year, ${month} month, ${days} days`
}

console.log(daysConvert(400))