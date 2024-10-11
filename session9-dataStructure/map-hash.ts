const myMap = new Map()

myMap.set("Wildan", "001") // parameter (key, value)
myMap.set("Budi", "002")
myMap.set(true, "003")

console.log(myMap)

for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`)
}

console.log(myMap.size)
console.log(myMap.get("Wildan"))
console.log(myMap.keys())