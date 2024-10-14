/*
● Create a function to get the intersection of two objects

● Example
    ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
    ○ Output: { a: 1 }

Pseudocode:
1. buat function "intersectionTwoObject" dengan 2 parameter tipe any karena ada 2 input object
2. mengecek key-value yang sama di 2 object dengan looping for...in dan if statement
    2.1. looping key di obj1
    2.2. if key-value current key di obj1 === key-value current key di obj2
            then simpan [current value] dan key-value di obj1 di variabel output
3. buat variabel output, interection tipe object any untuk menyimpan key-value yang sama di 2 obj
4. setelah return selesai, return variabel output (intersection)
*/

function intersectionTwoObject (obj1: any, obj2: any): any {

    // variabel output
    let intersection: any = {}

    // looping untuk mengecek setiap key di obj1
    for (let key in obj1) {

        // dalam looping, cek apakah current key di obj1 sama dengan key di obj2
        if (obj1[key] === obj2[key]) {
            console.log(obj1[key])
            console.log(obj1[key])

            // jika ada yang sama, simpan di intersection
            intersection[key] = obj1[key]
                console.log(intersection)
        } 
    }

    // setelah loop selesai, return intersection[] yang isinya {key: value} yang sama di obj1 & obj2
    return intersection
}

console.log(intersectionTwoObject({a: 1, b: 2}, {a: 1, c: 3, b: 2}))