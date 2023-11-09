// Without tail call optimization
const fib = (n: number) => {
	if (n < 2) return n
	return fib(n - 1) + fib(n - 2)
}

// With tail call optimization
const fibTco = (n: number, a: number = 0, b: number = 1): number => {
	if (n === 0) return a
	if (n === 1) return b
	return fibTco(n - 1, b, a + b)
}

// fib(10)
console.log(fibTco(6))
