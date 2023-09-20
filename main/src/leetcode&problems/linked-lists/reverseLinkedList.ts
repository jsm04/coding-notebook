/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

const reverseList = function (head: ListNode | null): ListNode | null {
	let prev: null | ListNode = null,
		curr = head
	while (curr) {
		const next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}

export {}
