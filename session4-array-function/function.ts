// FUNCTION / SUB-PROGRAM

// FUNCTION DECLARATION

function reverseStr(input: string) {
    return input.split("").reverse().join("") // return = nilai yang dikembalikan, nilai baru / hasil
}

console.log(reverseStr("Hello World"))
console.log(reverseStr("Bandung"))

const letter: string = reverseStr("Purwadhika")

console.log(letter)

// FUNCTION EXPRESSION

const sum = function (a: number, b: number) { // (a: number. b: number) adalah parameter
    return a + b
}

console.log(sum(10,5)) // (10, 5) adalah argumen
// console.log(sum(10)) // error karena argumen hanya 1

// function tidak akan running jika tidak dipanggil

// FUNCTION SCOPE

// ketika membuat variabel di dalam function

const Sum = function (a: number, b: number) {
    const n: number = 10
    return a + b
}

// console.log(n)) // variabel n tidak bisa dipanggil karena di dalam scope function Sum

// DEFAULT PARAMETER

const sum2 = function (a: number, b: number = 0) {
    return a + b
}

console.log(sum2(1, 1) )
console.log(sum2(1)) // tidak error walaupun hanya ada 1 argumen karena ada default argumen = 0


// PERBEDAAN FUNCTION DECLARATION & EXPRESSION 
// Function declaration bisa memanggil / running function sebelum line function dibuat
// Function expression tidak bisa memenaggil / running function sebelum line variable function dibuat

// RETURN
// return harus paling bawah dari line funtion, ditulis di line terakhir dari function
// kalau function tidak ada return, maka tidak ada hasil / nilai baru yang dikembalikan ke function

// REST PARAMETER

const sum3 = function (a: number = 0, b: number = 0, ...others: number[]) {
    console.log(others) // menyimpan argumen selain argumen a, b
    
    return a + b
}

// console.log(sum(1, 2, 3, 4, 5)) // [3, 4, 5] disimpan di others

// NESTED FUNCTION

function getMessage(firstName: string) {
    function sayHello() {
        return "Hello " + firstName
    }
    function welcomeMessage() {
        return "Welcome to Purwadhika!"
    }

    return sayHello() + ", " + welcomeMessage()
}

const message: string = getMessage("Wildan")

console.log(message)

// nested function di dalam scope function tidak bisa dipanggil di luar function

// CLOSURE FUNCTION
// function yang nge-return function baru
// dimana function baru mengakses variabel dan parameter function luar

function greeting (name: string) {
    const defaultMsg: string = "Hello"
   
    return function () {
        return defaultMsg + " " + name
    }
}

const greetingWildan = greeting("Wildan")
console.log(greetingWildan())

console.log(greeting("Wildan")())

// CURRYING FUNCTION

function multiplier (factor: number) {
    return function (number: number) {
        return factor * number
    }
}

const mul3 = multiplier(3) // function mul3

console.log(mul3(1))
console.log(mul3(3))
console.log(mul3(10))

const mul5 = multiplier(5) // function mul5

console.log(mul5(1))
console.log(mul5(5))
console.log(mul5(10))

// RECURSIVE FUNCTION
// function yang memanggil dirinya sendiri

function countDown (fromNumber: number) {
    console.log(fromNumber)

    let nextNumber: number = fromNumber - 1

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

countDown(10)

// ARROW FUNCTION
// tapi arrow function punya limitation

const squareExpression = function (number: number) {
    return number * number
}

const squareArrow = (number: number) => number * number

console.log(squareExpression(3))
console.log(squareArrow(3))

// PREDEFINED FUNCTION

console.log(1 / 0)

console.log(isFinite(1/0)) // infinite / tak terhingga
console.log(isFinite(1/1)) // finite / terhingg

console.log(isNaN(0/0))
console.log(isNaN(4/2))

console.log(parseFloat("1.5")) // parse string to floating point number

console.log(parseInt("111", 2)) // (1 * 2^2) + (1 * 2^1) + (1 * 2^0) = 4 + 2 + 1 = 7
console.log(parseInt("111", 8)) // (1 * 8^2) + (1 * 8^1) + (1 * 8^0) = 64 + 8 + 1 = 73


