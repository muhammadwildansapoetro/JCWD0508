/*
Exercise - Employee Salary

● Specifications :
    ○ Create a program to calculate total salary based on employee type
    ○ There are two types of employee : full-time & part-time
    ○ Salary for full-time employee :
        ■ IDR 100.000 / hour
        ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
    ○ Salary for part-time employee :
        ■ IDR 50.000 / hour
        ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

● Requirements :
    ○ Create an Employee as a parent class
    ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
        ■ Create a method in that class to add working hour per day
        ■ Create a method in that class to calculate total salary
    ○ Use inheritance concept
*/

class Employee {
    name = ""
    type = ""
    #workHour = 0
    #basicSalary = 0
    #overTimeSalary = 0

        constructor (name: string, type: string, basicSalary: number, overTimeSalary: number) {
            this.name = name
            this.type = type
            this.#basicSalary = basicSalary
            this.#overTimeSalary = overTimeSalary
        }

    addHour (n: number) {
        this.#workHour += n // menambahkan jam kerja
    }

    getSalary () {
        if (this.#workHour <= 6) {
            return this.#workHour * this.#basicSalary
        } else {
            return (this.#basicSalary * 6) + ((this.#workHour - 6) * this.#overTimeSalary)
        }
    }
}

class FullTimeEmployee extends Employee {

    constructor(name: string) {
        super (name, "Full-Time", 100000, 75000 )
    }
}

class PartTimeEmployee extends Employee {

    constructor(name: string) {
        super (name, "Part-Time", 50000, 30000 )
    }
}

const employee1 = new FullTimeEmployee("Wildan")
const employee2 = new PartTimeEmployee("Budi")

employee1.addHour(1)
employee2.addHour(1)

console.log(employee1.getSalary())
console.log(employee2.getSalary())

console.log(employee1) // salary tidak muncul karena private
console.log(employee2) // salary tidak muncul karena private