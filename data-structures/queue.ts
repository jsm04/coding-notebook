export class SimpleQueue<T> {
	items: T[] = []
	add(item: T) {
		this.items.push(item)
	}
	remove() {
		return this.items.shift()
	}
	isEmpty(): boolean {
		return this.items.length <= 0
	}
	peek() {
		return this.items[0]
	}
}

type QNode<T> = {
	value: T
	next?: QNode<T>
}

export class Queue<T> {
	public length: number
	private tail?: QNode<T>
	private head?: QNode<T>

	constructor() {
		this.head = this.tail = undefined
		this.length = 0
	}

	enqueue(item: T): void {
		const node = { value: item } as QNode<T>
		this.length++
		if (!this.tail) {
			this.tail = this.head = node
			return
		}
		this.tail.next = node
		this.tail = node
	}

	dequeue(): T | undefined {
		if (!this.head) {
			return undefined
		}
		this.length--
		const head = this.head
		this.head = this.head.next
		if (this.length === 0) {
			this.tail = undefined
		}
		return head.value
	}
	peek(): T | undefined {
		return this.head?.value
	}
}
