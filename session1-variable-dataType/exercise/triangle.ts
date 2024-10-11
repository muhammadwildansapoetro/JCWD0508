/* Problem 4
Write a code to find angles of triangle if two angles are given.

Hint:
Formula to find angles of trianle 180 = angles1 (a) + angles2 (b) + angles3 (c)

Solution:
1. Create variable input
- let a (angles 1)) = 80
- let b (angles 2) = 65
2. Create variable output
- const anglesFinder = 180 - (a + b)
*/

let a: number = 80
let b: number = 65

const anglesFinder = 180 - (a + b)

console.log(anglesFinder)