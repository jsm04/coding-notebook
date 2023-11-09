type Node<T> = {
	value: T
	prev?: Node<T>
	next?: Node<T>
}

export default class DoublyLinkedLIst<T> {
	public length: number
	private head?: Node<T>

	constructor() {
		this.length = 0
	}

	prepend(item: T): void {
		const node = { value: item } as Node<T>
		this.length++
		if (!this.head) {
			this.head = node
			return
		}
		node.next = this.head
		this.head.prev = node
		this.head = node
	}

	insertAt(item: T, idx: number): void {
		if (idx > this.length) {
			throw new Error('Not allowed')
		} else if (idx === this.length) {
			this.append(item)
			return
		} else if ((idx = 0)) {
			this.prepend(item)
			return
		}

		let curr = this.head

		for (let i = 0; curr && i < idx; ++i) {
			curr = curr.next
		}
		const node = { value: item } as Node<T>
		// node.next  = curr
		// node.prev = curr.prev
		// curr.prev = node
	}

	// append(item: T): void {}

	remove(item: T): T | undefined {
		return item
	}
}
