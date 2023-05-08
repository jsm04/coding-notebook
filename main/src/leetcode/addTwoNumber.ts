class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let remainder = 0

	let current = new ListNode(0)

	let result = current

	while (l1 !== null || l2 !== null || remainder > 0) {
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
