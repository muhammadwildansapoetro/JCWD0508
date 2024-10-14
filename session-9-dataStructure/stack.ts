/*
Stack

LIFO = Last In - First Out
*/

class Stack {
    #maxSize: number
    #container: number[] = []

    constructor(maxSize: number = 10) {
        this.#maxSize = maxSize
    }

    #isFull() {
        return this.#container.length >= this.#maxSize
    }

    #isEmpty() {
        return this.#container.length === 0 // kalau compare, "=" harus "==" atau "===""
    }

    push(element: number) {
        if (this.#isFull()) {
            console.log("Stack overflow!")
            return
        }

        this.#container.push(element)
    }

    pop() {
        if (this.#isEmpty()) {
            console.log("Stack underflow!")
            return
        }

        this.#container.pop()
    }

    getElements() {
        return this.#container
    }
}

const stack1 = new Stack() // default max size = 10
const stack2 = new Stack(2) // default max size = 10

// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// console.log(stack1.getElements())

// stack1.pop()
// stack1.pop()
// stack1.pop()
// console.log(stack1.getElements())

stack2.push(1)
stack2.push(2)
stack2.push(3)
console.log(stack2.getElements())
