/*
	Example 1:
	Input: n = 3
	Output: ["((()))","(()())","(())()","()(())","()()()"]

	Example 2:
	Input: n = 1
	Output: ["()"]
*/

const generateParenthesis = (n: number): string[] => {
	const stack: string[] = []
	const res: string[] = []

	const backtrack = (openN: number, closedN: number) => {
		if (openN < n) {
			stack.push('(')
			backtrack(openN + 1, closedN)
			stack.pop()
		}

		if (closedN < openN) {
			stack.push(')')
			backtrack(openN, closedN + 1)
			stack.pop()
		}

		if (openN === n && closedN === n) {
			res.push(stack.join(''))
			return
		}
	}
	backtrack(0, 0)
	return res
}

const Input = 3
generateParenthesis(Input) // Output: ['((()))', '(()())', '(())()', '()(())', '()()()']
