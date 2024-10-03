// For loop

for (let i = 0; i <= 5; i++) {
    if (i == 3) continue
    console.log(`Hello! ke-${i}`)
}
    


/* 
1. The first statement is executed once before the execution of the code block, to initialize the iteration variable.
2. The second statement defines the condition for executing the code block. (Pembatas looping)
3. The third statement is executed every time after the execution of the code block. 

i = 0; 0 < 3 = true; 0 + 1 = 1
then run code ke-1
i = 1; 1 < 3 = true, 1 + 1 = 2
then run code ke-2
i = 2, 2 < 3 = true, 2 + 1 = 3
then run code ke-3
i = 3, 3 < 3 = false, stop increment
stop run code

Jika looping tidak ada pembatasnya, maka akan terjadi infinite looping
*/

// While loop

let i: number = 1

// while (true) {
//     console.log(`Hello! ke-${i}`)
//     if (i == 3) break
//     i++
// }

/* 
Keep in mind that when using loops, we should always set a condition 
so that the loop will eventually break/stop. 
*/

// Do while

do {
    console.log(`Hello! ke-${i}`)
    i++
} while(i <= 5)

// Do while akan run code dulu sebelum cek kondisi dalam while()

// Lebih sering menggunakan for loop