export function logTimings<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		__timings = []
		printTimings = () => {
			console.log(this.__timings)
		}
	}
}
