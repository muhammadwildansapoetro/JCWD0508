
// CARA 1 MEMBUAT VARIABEL ARRAY

const arr: string[] = ["A", "B", "C"]

console.log(arr)

// array = tipe data yang bisa menyimpan banyak data
// data array dikurung dengan square bracket []
// setiap data dipisah dengan koma (,)

// CARA 2 MEMBUAT VARIABLE ARRAY

const arr2: number[] = new Array(1, 2, 3, 4)

console.log(arr2)

// VARIABEL ARRAY DENGAN 2 TIPE DATA

const arr3: (number | string)[] = [1, 2, 3, "A", "B", "C"]

console.log(arr3)

// CARA MENGAKSES DATA DI DALAM ARRAY

// index di dalam variabel array dimulai dari 0

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])
console.log(arr2[3])

console.log(arr3[0])
console.log(arr3[1])
console.log(arr3[2])
console.log(arr3[3])
console.log(arr3[4])
console.log(arr3[5])

// membuat variabel array dengan syntax lain

const arr4: Array<number> = [1, 2, 3]

// method built in array

console.log(arr.length)
console.log(arr2.length)
console.log(arr3.length)

// cara edit data ke dalam variabel array

const arr5: string[] = ["A", "B", "C"]

// menambah value = "D" di belakang (index terakhir)

arr5.push("D") 

console.log(arr5)

// menambah value = "0" di depan (index pertama)

arr5.unshift("0") 

console.log(arr5)

// menghapus value terakhir (index terakhir)

arr5.pop()

console.log(arr5)

// menghapus value pertama (index pertama)

arr5.shift()

console.log(arr5)

// menghapus value index ke-n

arr5.splice(1,1) 
// (mulai dari index ke berapa, hapus berapa banyak index) 
// mulai dari index ke-1 = "B", hapus sebanyak 1 index

console.log(arr5)

// menambahkan value pada index ke-n

arr5.splice(1, 0, "B") // mulai dari index ke-1, hapus 0 index, tambahkan value "B" di index ke-1

console.log(arr5)

// cara mengurutkan nilai dalam array (ascending dan descending)

const numArr: number[] = [1, 3, 2, 100, 31]

console.log(numArr)

numArr.sort((a, b) => a - b) // sort ascending , "call back function

console.log(numArr)

numArr.sort((a, b) => b - a) // sort descending , call back function

console.log(numArr)

numArr.sort() 
// default ascending
// jika sort tanpa callback funtion, hanya sort angka pertama, 
// tidak cocok untuk sort number, bisa sort alfabet

console.log(numArr)

// sort ascending & descending alfabet

arr5.sort().reverse()

console.log(arr5)

arr5.sort()

console.log(arr5)

// array built-in method .find

const numArr2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumber: number[] = numArr2
    .filter((item) => item % 2 == 1 && item > 1) // function (item) => item if condition
    .sort((a, b) => b - a) // function (a, b) = b - a = descending filter result

console.log(oddNumber)

// array built-in method .find and .findIndex

console.log(oddNumber.find((item) => item == 3))
console.log(oddNumber.findIndex((item => item == 7)))

// array built-in method .includes

console.log(oddNumber.includes(5))
console.log(oddNumber.includes(1))

// mengubah string menjadi array

const str: string = "Purwadhika Bandung"

console.log(str.split(""))
console.log(str.split(" "))
console.log(str.split("a"))

// mengubah array menjadi string

console.log(str.split("").toString())
console.log(str.split("").join(""))
console.log(str.split("").join("-"))
console.log(str.split("").join("."))
console.log(str.split("").join(" "))

const inputStr: string = "kasur rusak"
const palindrome: string = inputStr.split("").reverse().join("")

console.log(palindrome)

console.log(inputStr === palindrome ? "palindrome" : "not palindrome")

// cara pertama looping value array menggunakan .forEach

const newArr: number[] = [10, 20, 30, 40, 50]

newArr.forEach((item, index) => {
    console.log(item, index)
})

// kelebihan .forEach = bisa tau urutan index


newArr.map((item, index) => {
    console.log(item, index)
})

// kelebihan .map = bisa membuat array baru 

const newArr2: number[] = newArr.map((item) => item += 5)

console.log(newArr2)

// membuat array baru dengan .forEach

const newArr3: number[] = []

newArr.forEach((item) => {
    newArr3.push(item + 5)
})

console.log(newArr3)

// looping array dengan for of

for (let item of newArr) {
    console.log(item)
}

// looping array dengan for ... of tidak bisa mendapatkan index