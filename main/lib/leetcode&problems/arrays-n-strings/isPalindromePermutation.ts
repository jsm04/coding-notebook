const isPalindromePermutation = function (input: string): boolean {
	const charCount = new Map<string, number>()

	// Count the frequency of each character
	for (const char of input.replace(/\s/g, '')) {
		charCount.set(char, (charCount.get(char) || 0) + 1)
	}

	let oddCount = 0

	// Count the number of characters with odd frequency
	for (const currMapCharCount of charCount.values()) {
		if (currMapCharCount % 2 !== 0) {
			oddCount++
		}
	}
	// A palindrome permutation can have at most one character with odd frequency
	return oddCount <= 1
}

// Example usage
console.log(isPalindromePermutation('tact coa')) // true (permutations: "taco cat", "atco cta", etc.)
console.log(isPalindromePermutation('hello')) // false

/* this is great how to program as you should*/
