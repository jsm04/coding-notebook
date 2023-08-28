function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout

	return function debouncedFunction(...args: Parameters<T>) {
		clearTimeout(timeout)

		timeout = setTimeout(() => {
			func(...args)
		}, wait)
	}
}

// Example usage
function processInput(input: string) {
	console.log(`Processing input: ${input}`)
	// Simulate some time-consuming operation
	// For example, calling an API or performing a database query
}

const debouncedProcessInput = debounce(processInput, 500)

// Simulate multiple rapid inputs
debouncedProcessInput('Input 1')
debouncedProcessInput('Input 2')
debouncedProcessInput('Input 3')

// Only one call to processInput will be executed after the debounce time (500ms)
