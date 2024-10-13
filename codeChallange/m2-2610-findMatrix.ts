function findMatrix(nums: number[]): number[][] {
    const numCount: { [key: number]: number } = {}

    for (let num of nums) {
        console.log(num)
        numCount[num] = (numCount[num] || 0) + 1 // karena looping num pertama, value-nya undefined, maka diberi atau || 0
        console.log(numCount);
    }

    const result: number[][] = []

    while (Object.keys(numCount).length > 0) {
        const currentRow: number[] = []

        for (let num in numCount) {
            console.log(num)
            currentRow.push(Number(num)) // tambahkan number num ke "currentRow"

            console.log(numCount);
            numCount[num] -= 1 // karena sudah dipakai di row 1
            console.log(numCount)

            if (numCount[num] === 0) {
                console.log(numCount)
                delete numCount[num] // delete key yang value-nya sudah 0, agar tidak terpakai di array berikutnya
                console.log(numCount)
            }
        }

        result.push(currentRow)
    }

    return result
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]))