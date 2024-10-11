interface Student {
    name: string;
    email: string;
}

function mergeStudentData(array1: Student[], array2: Student[]): Student[] {
    const mergedArray = [...array1, ...array2];
    
    // Remove duplicates by creating a map with email as the key
    const uniqueStudents = new Map<string, Student>();

    mergedArray.forEach(student => {
        uniqueStudents.set(student.email, student);
    });

    // Convert the map back to an array
    return Array.from(uniqueStudents.values());
}

// Example usage:
const array1: Student[] = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
];

const array2: Student[] = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
];

const result = mergeStudentData(array1, array2);
console.log(result);
