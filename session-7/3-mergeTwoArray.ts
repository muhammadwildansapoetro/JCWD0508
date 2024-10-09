/*
● Create a function to merge two array of student data and remove duplicate data
● Student data : name & email

● Example :
    Array1 → [
        { name: ‘Student 1’, email : ‘student1@mail.com’ },
        { name: ‘Student 2’, email : ‘student2@mail.com’ }
    ]

    Array2 → [
        { name: ‘Student 1’, email : ‘student1@mail.com’ },
        { name: ‘Student 3’, email : ‘student3@mail.com’ }
    ]

● Result :
    ArrayResult → [
        { name: ‘Student 1’, email : ‘student1@mail.com’ },
        { name: ‘Student 2’, email : ‘student2@mail.com’ },
        { name: ‘Student 3’, email : ‘student3@mail.com’ }
    ]

Pseudocode:
- buat function, 2 parameter tipe array
- cari duplicate element di 2 input array
- cek setiap element di input1, looping
- compare element input1 dan element input2
- if element ke-index tidak duplicate, masukin ke array output
- else element ke-index duplicate, return array output
- remove duplicate data
*/

function mergeTwoArray(arr1: object[], arr2: object[]) {

    const arrRes: object[] = [{}]

    for (let ele in arr1) {
        console.log(ele)
        console.log(arr1[ele])
    
        if (arr1[ele] !== arr2[ele]) {
            arrRes[ele] = arr1[ele]
                console.log(arrRes[ele])
                console.log(arrRes)

        }

    }

}

mergeTwoArray([
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 2", email : "student2@mail.com" }
    ],
    [ 
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 3", email : "student3@mail.com" } 
    ] 
)