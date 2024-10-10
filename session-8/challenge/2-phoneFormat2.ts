function phoneFormat(str: string) {

    let res = "(xxx)-xxx-xxx"

    for (let i = 0; i < str.length; i++) {
        res = res.replace("x", str.charAt(i))
            console.log(res)
    }

return res

}

console.log(phoneFormat("123456789"))
console.log(phoneFormat("987654321"))
console.log(phoneFormat("123"))
