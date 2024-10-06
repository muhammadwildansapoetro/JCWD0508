/*
Problem:
Write a code to print the first N fibonacci numbers
○ Example: 15 → 610

Hint:
- The Fibonacci numbers may be defined by the recurrence relation
- F0 = 0
- F1 = 1
- Fn = F(n-1) + F(n-2)
- for n > 1

Solutions
1. Create input variable and assign value data type number
   const n = input
   let F0 = 0
   let F1 = 1
2. Formula Fn if n > 1
   Fn = F(n-1) + F(n-2)

   F0  F1  F2  F3  F4  F5
   0 + 1 = 1
       1 + 1 = 2
           1 + 2 = 3
               2 + 3 = 5

    
3.  
*/


/*
loop 1:
i = 2; 2 <= 4 = true;
    result = 0 + 1 = 1
    n0 = n1 = 1
    n1 = 1
        i++ = 2 + 1 = 3 (nilai i untuk loop ke-2)

loop 2:
3 <= 4) = true;
    result = 1 + 1 = 2 
    n0 = n1 = 1
    n1 = result = 2
        i++ = 3 + 1 = 4 (nilai i untuk loop ke-3)

loop 3:
4 <= 4  = true;
    result = 1 + 2 = 3
    n0 = n1 = 2
    n1 = result = 3 (final)
        i++ = 4 + 1 = 5 (nilai i untuk loop ke-4)

loop 4:
5 <= 4 = false;
    stop looping
*/

const num: number = 15

let a: number = 0
let b: number = 1

for (let i = 0; i < num ; i++) {
    let nextNumber = a + b
    a = b
    b = nextNumber
}

console.log(a)