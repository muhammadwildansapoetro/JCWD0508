const obj: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    str: 4
}

obj.a++
console.log(obj)

obj.a += 1
console.log(obj)

console.log(obj["a"])

// ---

const str: string = "a"

console.log(obj[str])
console.log(obj["str"])
console.log(obj.str) // artinya mencari di obj yang nama key-nya "str", makanya undefined karena gak ada key "str"
