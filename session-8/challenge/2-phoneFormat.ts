/*
    input: "123456789"
    output: "(123)-456-789"

    input: "98765432"
    output: "(987-654-321"
*/

function phoneFormat (input: string) {

    let inputArr: string[] = input.split("")

    let output: string = ""

    if (inputArr.length > 9) {
        return "The phone number is invalid (max 9 number)"
    } else {
        inputArr.unshift("(")
        inputArr.splice(3+1, 0, ")")
        inputArr.splice(4+1, 0, "-")
        inputArr.splice(8+1, 0, "-")
        inputArr.splice(12+1, 0, "-")
    
        output = inputArr.join("")
    }
    
    return output
}

console.log(phoneFormat("123456789"))
console.log(phoneFormat("987654321"))
console.log(phoneFormat("12345678999"))