/*
Create a function to check if two objects are equal (key and value)

● Example
○ Input : { a: 2 } & { a: 1 }
○ Output: false

● Example
○ Input : { a: “Hello” } & { a: 1 }
○ Output: false

● Example
○ Input : { a: 1 } & { a: 1 }
○ Output: true
*/

function isTwoObjectEqual (obj1: any, obj2: any): boolean {

    // mengecek tipe data adalah obj1 dan obj2 adalah object
    // dan mengecek vallue obj1 dan obj2 tidak null (empty)
    if (typeof obj1 === "object" && obj1 !== null && typeof obj2 === "object" && obj2 !== null) {

        // jika tipe obj1 dan obj2 adalah object dan value tidak null
        // buat variabel untuk menyimpan keys dari obejct
        const keys1: string[] = Object.keys(obj1)
            console.log(keys1)
        const keys2: string[] = Object.keys(obj2) 
            console.log(keys2)

        // mengecek apakah jumlah element (key object) di obj1[] dan obj2[] tidak sama
        if (keys1.length !== keys2.length) {
            // jika true, artinya 2 obj itu tidak equal = false
            return false
        } 
            console.log(keys1.length)
            console.log(keys2.length)

        // iterate/looping semua element (key object) di keys1[] = keys2[] (jumlah key element sama)
        for (let key of keys1) {
            // mengecek apakah value key kedua object tidak sama
            if (obj1[key] !== obj2[key]){
                console.log(obj1[key])
                console.log(obj2[key])
                // jika tidak sama, artinya 2 obj itu tidak equal 
                return false
            }
        }

        // obj1 === obj2
        return true
    }

    // jika obj1 dan obj2 bukan object atau null, maka 2 obj tersebut tidak equal
    return false
}

// console.log(isTwoObjectEqual({a: 2}, {a: 1}))
console.log(isTwoObjectEqual({a: "Hello", b: "World"}, {a: "Hello", b: "World"}))
// console.log(isTwoObjectEqual({a: 1}, {a: 1}))

// console.log(isTwoObjectEqual({a: 1}, {b: 1}))

