/*
    input:
        str = "Purwadhika Bandung"
        maxChar = 10

    Output: "Purwadhika..."

    input:
        str = "Purwadhika Bandung"
        maxChar = 10
   
    output: "Purwadhika Band...""


    input:
        str = "Purwadhika Bandung"
        maxChar = 10

    output: "Purwadhika Bandung"
*/

function maxChar(input: string, maxChar: number) {
    
    if (input.length >= maxChar){
        input = input.split("").splice(0, maxChar).join("") + "..."
    }

    return input
}

console.log(maxChar("Purwadhika Bandung", 10))
console.log(maxChar("Purwadhika Bandung", 15))
console.log(maxChar("Purwadhika Bandung", 20))
