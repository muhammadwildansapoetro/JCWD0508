/*
● Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}]
*/

function keyValueSwap (input: any) {
    const res: any = {}

    for (let key in input[0]) {
        console.log(key)
        
        res[input[0][key]] = key
            console.log(res)
    }

    return [res]
}

console.log(keyValueSwap([{ name: "Wildan", age: 20}]))