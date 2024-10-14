/*
    input = "seekor anjing dan babi bermain di taman"
    output = " seekor a****g dan b**i bermain di taman"
*/

/*

*/

function censor (input: string) {
    
    const censorWord: string[] = ["anjing", "babi", "monyet"]
        console.log(censorWord[0])
        console.log(censorWord[1])
        console.log(censorWord[2])
    
    const output: string[] = []

    const inputArr = input.split(" ")
        console.log(inputArr)
    
    inputArr.forEach((item) => {
        if (censorWord.includes(item.toLowerCase())) {
            console.log(censorWord.includes(item.toLocaleLowerCase()))
            const first = item.charAt(0)
            const last = item.charAt(item.length - 1)
            const middle = "*".repeat(item.length - 2)
            output.push(first + middle + last)
        } else {
            output.push(item)
        }
    }) 
       
    return output.join(" ")
}

console.log(censor("Seekor anjing dan babi bermain di taman"))
console.log(censor("Monyet makan pisan"))
console.log(censor("Anjing Kintamani"))

