const data: any[] = [
    () => [
        ["andi", "budi"],
        false
    ],
    [() => [10, 11, 12], 13],
    { num: [1, 2, 3], count() { return "Hello World" } },
    () => () => {
        return {
            great() {
                return "Purwadhika Bandung"
            }
        }
    }
]

const obj: { [key: string]: any } = {
    name: "Andi",
    age: 21,
    country: "Indonesia"
}

for (let key in obj) {
    console.log(key)
    console.log(obj[key])
}