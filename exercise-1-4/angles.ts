/*
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/

function anglesFinder (angle1: number, angle2: number) {
    let angle3 = 180 - angle1 - angle2
    return `Triangle Angles: Angle 1 = ${angle1}, Angle 2 = ${angle2}, Angle 1 = ${angle3},`
}

console.log(anglesFinder(80, 65))
console.log(anglesFinder(90, 45))
console.log(anglesFinder(60, 60))
