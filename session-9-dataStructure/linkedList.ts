/*
A linked list is a linear data structure, 
in which the elements are not stored at contiguous memory locations.

In simple words, a linked list consists of nodes
where each node contains a data field 
and a reference(link) to the next node in the list.
*/

class Node {
    element: number
    next: any

    constructor(element: number) {
        this.element = element
        this.next = null
    }
}

class linkedList {
    head: Node | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    add(element: number) {
        let node = new Node(element)
        let current: any

        if (this.head == null) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }    

            current.next = node
        }   

        this.size += 1
    }

    printList() {
        let curr: any = this.head

        while (curr) {
            console.log(curr.element)
            curr = curr.next
        }
    }

}

const linked = new linkedList()

linked.add(1)
linked.add(2)
linked.add(3)
linked.add(4)

// console.log(linked)
// linked.printList()
console.log(linked.head?.next?.next?.next)

