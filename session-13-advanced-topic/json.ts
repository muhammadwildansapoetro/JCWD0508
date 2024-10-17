const obj1 = { name: 'andi', age: 25 }
const obj2 = {
    name: 'andi',
    age: 25
}

console.log(obj1 == obj2);

console.log(obj1);

// JSON = JavaScript Object Notation

const json1 = JSON.stringify(obj1)
const json2 = JSON.stringify(obj2)

console.log(json1);
console.log(json2);
console.log(typeof json1);
console.log(json1 === json2);

console.log(JSON.parse(json1));

const arr1 = [1, 2, 3]

console.log(JSON.stringify(arr1));

//--

