class Node<T> {
	next: Node<T>
	data: T

	constructor(data: T) {
		this.data = data
	}

	public appendToTail(data: T): void {
		const end = new Node(data)
		let thisNode = <Node<T>>this

		while (thisNode.next != null) {
			thisNode = thisNode.next
		}
		thisNode.next = end
	}

	public traverse() {
		const result: T[] = []
		let currentNode: Node<T> = this

		while (currentNode != null) {
			result.push(currentNode.data)
			currentNode = currentNode.next
		}
		return result
	}
}

class LinkedList {}

const mainNode = new Node(1)
mainNode.appendToTail(2)

mainNode.traverse()
