// If statement

let age: number = 11;

if (age >= 17) {
    console.log("You can now create an ID Card");
} else {
    console.log("You are not old enough to create an ID Card");
}

// Else if statement

let grade: string = "D";

if (grade === "A") {
    console.log("Execellent result!");
} else if (grade === "B") {
    console.log("Great result!");
} else if (grade === "C") {
    console.log("Average result!");
} else {
    console.log("Invalid result!");
}

// Switch case

const date: Date = new Date("2024-10-18")
const day: number = date.getDay()

console.log(day)

switch (day) {
    case 0: 
        console.log("Minggu");
        break
    case 1:
        console.log("Senin");
        break
    case 2:
        console.log("Selasa");
        break
    case 3:
        console.log("Rabu");
        break
    case 4:
        console.log("Kamis");
        break
    case 5:
        console.log("Jumat");
        break
    case 6:
        console.log("Sabtu");
        break
    default:
        console.log("Invalid day!")
}

// Truthy & falsy values

console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log(Boolean(" "))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(1))
console.log(Boolean("1"))
console.log(Boolean("0"))
console.log(Boolean("false"))
console.log(Boolean("true"))

// Logical operator

/*
&& = and = dua value harus sesuai kondisi agar true
|| = or = hasilnya true walaupun hanya 1 value yang true
! = not
*/

const x: number = 6
const y: number = 3

console.log(x < 10 && y > 1)
console.log(x == 1 || y == 3)
console.log(!(x == y))

// Ternary operator

const str: string = "TypeScripted"

if (str  == "TypeScript") {
    console.log("TypeScript")
} else {
    console.log("Not TypeScript")
}

console.log(str == "TypeScript" ? "TypeScript" : "Not TypeScript")

// Short-Circuiting &&

const value: string = "" // blank = false
const result: string = value && "Purwadhika"

console.log(result) // karena value = false, maka result = value

const value2: string = "ABC" // blank = false
const result2: string = value2 && "Purwadhika"

console.log(result2) // karena value = true, maka result = "Purwadhika"

// Short-Circuiting ||

const value3: string = "" // blank = false
const result3: string = value3 || "Purwadhika"

console.log(result3) // karena value = true, maka result = "Purwadhika"

const value4: string = "ABC" // blank = false
const result4: string = value4 || "Purwadhika"

console.log(result4) // karena value = true, maka result = "Purwadhika"
