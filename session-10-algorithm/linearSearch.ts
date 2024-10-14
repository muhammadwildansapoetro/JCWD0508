function search(arr: number[], x: number) {
    let i: number;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] == x) {
            return i
        }
    }

    return -1
}

console.log(search([2, 20, 10, 3], 20))
