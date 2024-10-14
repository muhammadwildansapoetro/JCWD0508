// array.sort akan merubah array awal walaupun disimpan di variabel baru

const arr: number[] = [11, 21, 22, 5, 30, 14]

const arrAsc: number[] = arr.sort((a, b) => a - b)
const arrDesc: number[] = arr.sort((a, b) => b - a)

console.log(arr);
console.log(arrAsc);
console.log(arrDesc);

// copy array agar tidak merubah array awal 

const arr2: number[] = [11, 21, 22, 5, 30, 14]

const arrAsc2: number[] = [...arr2].sort((a, b) => a - b)
const arrDesc2: number[] = [...arr2].sort((a, b) => b - a)

console.log(arr2);
console.log(arrAsc2);
console.log(arrDesc2);
