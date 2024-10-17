// Callback adalah sebuah functon yang dikirim sebagai argumen ke function lain

function calculator(a: number, b: number, callback: (x: any) => void) {
    callback(a + b)
}

function displayer(something: any) {
    console.log(something);
}

function multiplyer2(num: number) {
    console.log(num * 2)
}

calculator(10, 5, displayer)
calculator(10, 5, multiplyer2)
calculator(10, 5, (str: any) => console.log(str));

