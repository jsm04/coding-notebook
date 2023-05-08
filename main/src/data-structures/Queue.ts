export class Queue<T> {
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
