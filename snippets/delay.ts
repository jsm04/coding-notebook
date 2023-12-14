export function delay<T>(ms: number, data: T): Promise<T> {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(data)
		}, ms)
	)
}
