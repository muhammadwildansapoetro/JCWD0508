interface Student {
    name: string
    email: string
}

const arr1: Student[] = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 2", email : "student2@mail.coM" }
]
const arr2: Student[] = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 3", email : "student3@mail.com" },
    { name: "Student 4", email : "student4@mail.com" }
]

function mergeArr (arr1: Student[], arr2: Student[]) {
    const result: Student[] = arr1

    for (let item of arr2) {
        const idx = result.findIndex((val) => val.name == item.name && val.email == item.email)
            console.log(idx)
        if (idx == -1) {
            result.push(item)
        }
    }

    return result
}

console.log(mergeArr(arr1, arr2))