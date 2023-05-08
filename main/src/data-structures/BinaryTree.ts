class BinaryTree<T> {
	value: T
	right: T | null
	left: T | null
	constructor(value: T) {
		this.value = value
		this.right = null
		this.left = null
	}
}
