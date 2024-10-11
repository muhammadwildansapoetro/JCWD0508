const user = {
    firstName: "Muhamamd",
    lastName: "Wildan",
    greet() {
        console.log(`Hello ${this.lastName}`) // this = mengacu pada object dimana method greet() berada
        console.log(`Hello ` + user.lastName)
    }
}

user.greet()

