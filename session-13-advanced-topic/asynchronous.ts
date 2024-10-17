// Asynchronous: Functions running in parallel with other functions are called asynchronous

// Synchronous example
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// Asynchronous example
// console.log("Task 1");
// setTimeout(() => console.log("Task 2"), 1000);
// console.log("Task 3");

/* Promise

- pending
- fulfilled
- rejected

Promise basic method
.then()
.catch()
.finally()
*/

const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if (success) {
            resolve("Task 2")
        } else {
            reject("Task 2 error")
        }
    }, 3000)
})

const myFunc = async () => {
    console.log('Task 1')

    await tryPromise
        .then((resolve) => console.log(resolve)) // ambil isi resolve
        .catch((reject) => console.log(reject)) // ambil isi reject
    // .finally(() => console.log("finally done"))

    console.log('Task 3')
}

myFunc()

/*
To make a promise, just use “new” and “Promise” keyword.

Promise accept two parameters, the first parameter is when the promise is successful, 
the second parameter is when the promise.

If the code executed, expected output will be
“Success” and “finally done”. 

Why “success”? Because our Promise code will return successfully and run resolve. 

When promise success, it will execute then() method, after that finally() method execute.
*/