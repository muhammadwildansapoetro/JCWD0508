/*
    input = "Pig latin is cool"
    output = "igPay atinlay siay oolcay"
*/

function myFunc (input: string) {
    return input
        .split(" ")
        .map((item) => item.slice(1) + item.charAt(0) + "ay")
        .join(" ")
}

console.log(myFunc("Pig latin is cool"))