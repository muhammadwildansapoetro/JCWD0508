/*
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/

function anglesFinder (angle1: number, angle2: number) {
    let angle3 = 180 - angle1 - angle2
    return angle3
}

let res: number = anglesFinder(80, 65)

console.log(res)
