const compressString = function (input: string): string {
	const compressed = <string[]>[]
	let count = 1

	for (let i = 0; i < input.length; i++) {
		const next = i + 1
		if (input[i] === input[next]) {
			count++
		} else {
			if (count === 1) {
				compressed.push(input[i])
			} else {
				compressed.push(input[i].concat(count.toLocaleString()))
			}
			count = 1
		}
	}
	return compressed.join('')
}

const _compressString = function (input: string): string {
	let compressed = ''
	let count = 1

	for (let i = 0; i < input.length; i++) {
		if (input[i] === input[i + 1]) {
			count++
		} else {
			compressed += input[i] + count
			count = 1
		}
	}
	return compressed.length < input.length ? compressed : input
}

// Example usage
console.log(
	compressString(
		'aabcccccaaaaaaaajjjjjjjfffffffeeeeeaaaaslllsdddeeeeeeeefffjjhhhhhhssssggggggg'
	)
) // Output: "a2b1c5a3"
// console.log(compressString('abcde')) // Output: "abcde" (no compression)
