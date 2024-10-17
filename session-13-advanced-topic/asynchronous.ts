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

// myFunc()

//--

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/use')
        if (!response.ok) throw 'failed to fetch'
        const users = await response.json()
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

fetchData()