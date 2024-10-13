function create2DArray(nums: number[]): number[][] {
    const elementCount: { [key: number]: number } = {};

    // Step 1: Count the frequency of each element in nums
    for (const num of nums) {
        console.log(num);

        // atau || 0 karena di looping ke-1, elementCount masih kosong
        elementCount[num] = (elementCount[num] || 0) + 1;
        console.log(elementCount);

    }

    const result: number[][] = [];

    // Step 2: While there are elements left, create rows
    while (Object.keys(elementCount).length > 0) {
        console.log(Object.keys(elementCount));
        console.log(Object.keys(elementCount).length);

        const currentRow: number[] = [];

        // Step 3: Try to fill the current row with distinct elements
        for (const num in elementCount) {
            console.log(num);

            currentRow.push(Number(num));
            console.log(elementCount);

            elementCount[num] -= 1;
            console.log(elementCount);


            // If this element has been fully used, remove it from the count
            if (elementCount[num] === 0) {
                delete elementCount[num];
            }
        }

        // Add the current row to the result
        result.push(currentRow);
    }

    return result;
}

// Example 1
const nums1 = [1, 3, 4, 2, 1, 3, 1];
// const nums1 = [0];
console.log(create2DArray(nums1));
// Expected Output: [[1, 3, 4, 2], [1, 3], [1]]

// Example 2
// const nums2 = [1, 2, 3, 4];
// console.log(create2DArray(nums2)); 
// Expected Output: [[1, 2, 3, 4]]

