/* You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
    The valid operators are '+', '-', '*', and '/'.
    Each operand may be an integer or another expression.
    The division between two integers always truncates toward zero.
    There will not be any division by zero.
    The input represents a valid arithmetic expression in a reverse polish notation.
    The answer and all the intermediate calculations can be represented in a 32-bit integer.
*/

const evalRPN = function (tokens: string[]): number {
	const stack: number[] = []

	const handlers = {
		'*': () => stack.push(Number(stack.pop()) * Number(stack.pop())),
		'+': () => stack.push(Number(stack.pop()) + Number(stack.pop())),
		'-': () => {
			const a = Number(stack.pop())
			const b = Number(stack.pop())
			stack.push(b - a)
		},
		'/': () => {
			const a = Number(stack.pop())
			const b = Number(stack.pop())
			stack.push(Math.trunc(b / a))
		},
	}
	for (const char of tokens) {
		const handler = handlers[char]
		if (!handler) {
			stack.push(Number(char))
		} else {
			handler()
		}
	}

	return stack[0]
}

const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
const output = 22
const res = evalRPN(tokens)
console.log(res === output, `Output is: ${res}`)

/* Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 */
