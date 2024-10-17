//--

function calculator(a: number, b: number) {
    return a + b
}

function displayer(something: number) {
    return something
}

let result = calculator(5, 5)

displayer(result)

//--

function calculator2(a: number, b: number) {
    let result = a + b

    displayer2(result)
}

function displayer2(something: number) {
    return something
}

calculator2(5, 5)
