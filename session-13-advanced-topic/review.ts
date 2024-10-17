// Data Primitive

const str: string = String(100)
const str2: string = "100"

console.log(str);
console.log(typeof str2);

console.log(str === str2);

//--

const num: number = Number("100")
const num2: number = 100

console.log(num);
console.log(typeof num2);

console.log(num === num2);

//--

const data: boolean = Boolean()
const data2: boolean = true

console.log(data == data2);

//--

console.log(Number("12!")); // NaN = Not a Number, there is a non number input "!"
console.log(typeof NaN);

console.log(typeof null);

//--

const a: any = 1
const b: any = true // true = 1
const c: any = false // false = 0

console.log(a == b);
console.log(a === b);

console.log(a + b);
console.log(1 + c);

// Array

const arr: number[] = [1, 2, 3, 4, 5]

// Mutating Method:
// arr.push(6)
// arr.pop()
// arr.shift()
// arr.unshift(0)
// arr.splice(1, 2, 8)
// arr.sort((a, b) => b - a)
// arr.reverse()
// arr.fill(1)
arr.copyWithin(2, 0)

console.log(arr);

// method harus pake ()
// property tidak harus pake ()

// 

const A: any = 2
const B: any = '1'
const C: any = true

// console.log(A + B - B);
// console.log(A + (B - B));
// console.log(A + B + B);
// console.log(A % B);

console.log(A + B + B);
console.log(A + B * C);
console.log((A + B) * C);
