class ListNode {
	val: number
	next?: ListNode
	constructor(val?: number, next?: ListNode) {
		this.val = !val ? 0 : val
		this.next = next
	}
}

const addTwoNumbers = function (
	l1?: ListNode,
	l2?: ListNode
): ListNode | undefined {
	let remainder = 0
	let current = new ListNode(0)
	let result = current

	while (l1 || l2 || remainder > 0) {
		let sum = remainder
		if (l1) {
			sum += l1.val
			l1 = l1.next
		}
		if (l2) {
			sum += l2.val
			l2 = l2.next
		}
		remainder = Math.floor(sum / 10)
		current.next = new ListNode(Math.floor(sum % 10))
		current = current.next
	}
	return result.next
}
