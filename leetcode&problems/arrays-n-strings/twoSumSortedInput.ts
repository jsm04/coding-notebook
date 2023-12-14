const twoSumSortedInput = function (
	numbers: number[],
	target: number
): number[] {
	let L = 0,
		R = numbers.length - 1

	while (L < R) {
		const currentSum = numbers[L] + numbers[R]
		if (currentSum > target) {
			R -= 1
		} else if (currentSum < target) {
			L += 1
		} else {
			return [L + 1, R + 1]
		}
	}

	return []
}
