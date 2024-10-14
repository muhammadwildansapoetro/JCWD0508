/*
Create a function to calculate array of student data

● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
    
● Parameters : array of student

● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/

class Student {
    name: string = ""
    email: string = ""
    dob: string = ""
    score: number = 0

    constructor(nama: string, surel: string, tanggal: string, nilai: number) {
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }

    // method to calculate student's age in year from the date of birth
    getAge() {
        const today = new Date()
        const dob = new Date(this.dob)
        const diff =  today.getTime() - dob.getTime()
        const age = Math.floor(diff / (24 * 60 * 60 * 1000) / 365)
        
        return age
    }
}

const student1 = new Student("Wildan", "wildan@gmail.com", "1997-07-17", 90)
const student2 = new Student("Benzema", "fanira@gmail.com", "1991-01-01", 91)
const student3 = new Student("Yamal", "nisa@gmail.com", "1995-05-05", 99)

const arrStudent = [student1, student2, student3]

function calculate (arr: Student[]) {
    const dataScore = arr.map((item) => item.score).sort((a, b) => a - b)
    const dataAge = arr.map((item) => item.getAge()).sort((a, b) => a - b)

    return {
        score: {
            lowest: dataScore[0],
            highest: dataScore[dataScore.length - 1],
            average: dataScore.reduce((a, b) => a + b) / dataScore.length
        },
        age: {
            lowest: dataAge[0],
            highest: dataAge[dataAge.length - 1],
            average: dataAge.reduce((a, b) => a + b) / dataAge.length
        }
    }    
}

console.log(calculate(arrStudent))
