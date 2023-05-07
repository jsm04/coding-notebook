export const delay = <T>(time: number, data: T): Promise<T> =>
	new Promise((resolve) =>
		setTimeout(() => {
			resolve(data)
		}, time)
	)
