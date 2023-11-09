export const URLify = (input: string): string => {
	return input.trim().replaceAll(' ', '%20')
}

// Example usage
const input = 'Mr John Smith    '
console.log(URLify(input)) // Output: "Mr%20John%20Smith"
