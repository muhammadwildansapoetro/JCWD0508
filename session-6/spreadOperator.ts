/*
Spread operator ( ... ) allows us to quickly copy all 
or part of an existing array or object into another array or object
*/

const dataOne = [1, 2, 3]
const dataTwo = [4, 5, 6]
const finalDataList = [...dataOne, ...dataTwo]

console.log(finalDataList)

const objectOne = {
    name: "Wildan"
}
const objectTwo = {
    email: "wildan@gmail.com"
}

const finalObject = {...objectOne, ...objectTwo}

console.log(finalObject)