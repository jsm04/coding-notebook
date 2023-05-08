class Stack<T> {
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
