/*
Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
*/

function dateDiff (date1: Date, date2: Date) {
    let date1ms: number = date1.getTime()
    let date2ms: number = date2.getTime()
    let dayms: number = 24 * 60 * 60 * 1000
    let diff: number = (date2ms - date1ms) /dayms
    return `The difference between dates is ${diff} days`
}

console.log(dateDiff(new Date("2024-10-05"), new Date("2025-10-05")))

