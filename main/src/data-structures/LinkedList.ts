import { MockDataManager } from '../utilities/mock'

// link: https://www.devmaking.com/learn/data-structures/doubly-linked-list/typescript/

class Node<T> {
	value: T
	next: Node<T> | null
	prev: Node<T> | null
	constructor(value: T, prev = null, next = null) {
		this.value = value
		this.next = next
		this.prev = prev
	}
}

class LinkedList<T> {
	private head: Node<T> | null = null
	private tail: Node<T> | null = null
	private size = 0

	length(): number {
		return this.size
	}

	isEmpty(): boolean {
		return this.size <= 0
	}

	contains(value: T): boolean {
		if (this.isEmpty()) {
			return false
		}

		let temp = this.head

		while (temp != null) {
			if (temp.value === value) {
				return true
			}

			temp = temp.next
		}

		return false
	}

	get(index: number): any {
		if (index > this.size || this.isEmpty()) {
			throw new RangeError('Index out of range.')
		}

		if (index > this.size / 2) {
			let i = this.size - 1 - index
			let tmp = this.tail
			while (i > 0) {
				tmp = tmp!.prev
				i--
			}
			return tmp!.value
		} else {
			let tmp = this.head
			for (let i = 0; i < index; i++) {
				tmp = tmp!.next
			}
			return tmp!.value
		}
	}

	getFirst(): T | null {
		if (this.head != null) {
			return this.head.value
		}
		return null
	}

	getLast(): T | null {
		if (this.tail != null) {
			return this.tail.value
		}
		return null
	}

	public addLast(value: T) {
		if (this.isEmpty()) {
			let tmp = new Node(value)
			this.head = tmp
			this.tail = tmp
			this.size++
			return
		} else {
			let tmp = new Node(value)
			tmp.next = null
			tmp.prev = this.tail
			tmp.value = value

			this.tail!.next = tmp

			this.tail = tmp
			this.size++
		}
	}

	// alternate
	// append(value: T) {
	// 	const newNode = new Node(value)
	// 	if (!this.head) {
	// 		this.head = newNode
	// 	} else {
	// 		this.tail!.next = newNode
	// 		newNode.prev = this.tail
	// 	}
	// 	this.tail = newNode
	// 	this.size++
	// }

	public addFirst(value: T) {
		if (this.isEmpty()) {
			let tmp = new Node(value)
			tmp.value = value
			this.head = tmp
			this.tail = tmp
		} else {
			let tmp = new Node(value)
			tmp.next = this.head
			tmp.prev = null
			tmp.value = value
			this.head!.prev = tmp
			this.head = tmp
		}
		this.size++
	}

	traverse(callback: (...args: any[]) => any) {
		let currenNode = this.head
		while (currenNode !== null) {
			callback(currenNode)
			currenNode = currenNode.next
		}
	}

	remove(value: T) {
		if (this.isEmpty()) {
			return
		}
		let tmp = this.head
		while (tmp != null) {
			if (tmp.value === value) {
				if (tmp.prev != null) {
					tmp.prev.next = tmp.next
				} else {
					this.head = tmp.next
				}
				if (tmp.next != null) {
					tmp.next.prev = tmp.prev
				} else {
					this.tail = tmp.prev
				}
				this.size--
				return
			}

			tmp = tmp.next
		}
	}

	removeFirst() {
		if (this.isEmpty()) {
			return
		}

		if (this.size === 1) {
			this.head = null
			this.tail = null
			this.size--
		} else {
			this.head = this.head!.next
			this.head!.prev = null
			this.size--
		}
	}

	removeLast() {
		if (this.isEmpty()) {
			return
		}
		if (this.size == 1) {
			this.head = null
			this.tail = null
			this.size--
		} else {
			this.tail = this.tail!.prev
			this.tail!.next = null
			this.size--
		}
	}

	indexOf(value: T) {
		if (this.isEmpty()) {
			return -1
		}

		let index = 0
		let tmp = this.head

		while (tmp != null) {
			if (tmp.value === value) {
				return index
			}
			tmp = tmp.next
			index++
		}
		return -1
	}
}

type User = ReturnType<typeof MockDataManager.getUser>

const linkedList = new LinkedList<User>()

const store: User[] = []
const usersQuantity = 10
let index = 0

while (index < usersQuantity) {
	const userNode = MockDataManager.getUser()
	console.log(userNode)
	store.push(userNode)
	index++
}

console.log(store)

store.forEach((node) => linkedList.addFirst(node))

console.log(linkedList.length())

console.log(linkedList.traverse(console.log))
