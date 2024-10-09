// code Andhika Surya

function intersection(obj1: any, obj2: any) {

    let output: any = {}
     
    for (let key in obj1) {

        // if (key obj1 == obj2) = true && (value key obj1 == key obj2) = true
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            output[key] = obj1[key];
            console.log(obj2.hasOwnProperty(key))
        }
    }

    return output
}
console.log(intersection({ a: 1, b: 2 },{ a: 1, c: 3 ,b: 2}))