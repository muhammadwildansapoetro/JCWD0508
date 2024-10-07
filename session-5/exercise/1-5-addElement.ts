/*
Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/

function addElement (arr: number[], newElement: number) {
    if (!arr.includes(newElement)) { // Jika dalam arr tidak terdapat newElement, maka negasi false = true, tambah newElement ke arr
      arr.push(newElement)  
    } 
    return arr
}

console.log(addElement([1, 2, 3, 4], 4))
console.log(addElement([1, 2, 3, 4], 1))
console.log(addElement([1, 2, 3, 4], 5))
console.log(addElement([1, 2, 3, 4], 7))

