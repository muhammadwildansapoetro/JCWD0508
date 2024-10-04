/*
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/

function diameter (radius: number) {
    return radius * 2
}

const d: number = diameter(5)

console.log(d)

function circumference (radius: number) {
    const pi = 3.14159
    return 2 * pi * radius
}

const c: number = circumference(5)

console.log(c)

function areaCircle (radius: number) {
    const pi = 3.14159
    return pi * (radius ** 2)
}

const a: number = areaCircle(5)

console.log(a)

