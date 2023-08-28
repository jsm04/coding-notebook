import { interval, scan, map, startWith } from 'rxjs'

const firstTwoFibs = [0, 1]
// An endless stream of Fibonacci numbers.
const fibonacci$ = interval(1000).pipe(
	// Scan to get the fibonacci numbers (after 0, 1)
	scan(([a, b]) => {
		return [b, a + b]
	}, firstTwoFibs),
	// Get the second number in the tuple, it's the one you calculated
	map(([, n]) => n),
	// Start with our first two digits :)
	startWith(...firstTwoFibs)
)

fibonacci$.subscribe(console.log)
