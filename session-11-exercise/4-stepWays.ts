/* Exercise 4 - Step Ways

● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
steps. In how many distinct ways can you climb to the top?

● Example 1:
    ○ Input: n = 2
    ○ Output: 2
    ○ Explanation: There are two ways to climb to the top.
        ■ 1. 1 step + 1 step
        ■ 2. 2 steps

● Example 2:
    ○ Input: n = 3
    ○ Output: 3
    ○ Explanation: There are three ways to climb to the top.
        ■ 1. 1 step + 1 step + 1 step
        ■ 2. 1 step + 2 steps
        ■ 3. 2 steps + 1 step
*/

function climbWays(n: number) {

    if (n === 1) return 1 // 1 way to climb 1 step
    if (n === 2) return 2 // 2 ways to climb 2 step (1 step + 1 step or 2 step)

    let firstStep = 1 // way to climb to step 1
    let secondStep = 2 // ways to climb to step 2
    let currentStep: number = 0

    for (let i = 3; i <= n; i++) {
        currentStep = firstStep + secondStep

        firstStep = secondStep
        secondStep = currentStep
    }

    return secondStep
}

console.log(climbWays(3))
console.log(climbWays(4))
console.log(climbWays(5))

/*
a + b = c
0 + 1 = 1 (1)
    1 + 1 = 2 (2)
        1 + 2 = 3 (3)
            2 + 3 = 5 (4)
                3 + 5 = 8 (5)
*/

// Other way

function fibonaci(n: number) {
    const res: number[] = [0, 1]

    for (let i = 0; i <= n; i++) {
        res.push(res[i] + res[i + 1])
    }

    return res[n + 1]
}

console.log(fibonaci(3))
console.log(fibonaci(4))
console.log(fibonaci(5));
