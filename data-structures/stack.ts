class SimpleStack<T> {
    items: T[] = []

    push(item: T) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }
}

type SNode<T> = {
    value: T
    prev?: SNode<T>
}

class Stack<T> {
    public length: number
    private head?: SNode<T>

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>
        this.length++
        if (!this.head) {
            this.head = node
            return
        }
        node.prev = this.head
        this.head = node
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)
        if (this.length === 0) {
            const head = this.head
            this.head = undefined
            return head?.value
        }
        const head = this.head as SNode<T>
        this.head = this.head?.prev
        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}

const stack = new Stack<number>()

stack.push(1)
stack.push(2)

stack.pop()
stack.pop()
