// Without tail call optimization
const factorial = (n) => {
	if (n <= 1) {
		return 1
	}
	return n * factorial(n - 1)
}

// With tail call optimization
const factorialTco = (n: number, accumulator = 1) => {
	if (n <= 1) {
		return accumulator
	}
	return factorialTco(n - 1, n * accumulator)
}
