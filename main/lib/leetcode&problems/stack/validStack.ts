/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = function (s: string): boolean {
	const closingToOpening = {
		'}': '{',
		']': '[',
		')': '(',
	}

	const stack: string[] = []
	const chars = s.split('')

	for (let i = 0; i < chars.length; i++) {
		const current = chars[i]
		if (current in closingToOpening) {
			const pop = stack.pop()

			if (closingToOpening[current] === pop) {
				continue
			} else {
				return false
			}
		} else {
			stack.push(current)
		}
	}
	if (stack.length > 0) return false
	return true
}

const Input = '()[]{}'
console.log(isValid(Input))

/*
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 */
