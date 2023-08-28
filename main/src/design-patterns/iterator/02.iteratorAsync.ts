import { delay } from '../../snippets/delay'

type AsyncFunction = (...args: any) => Promise<any>

async function* createQueue(asyncFn: AsyncFunction[]) {
	const queue: AsyncFunction[] = [...asyncFn]

	let idx = queue.length - 1

	while (queue.length > 0) {
		const result = queue[idx]
		queue.pop()
		idx--
		yield await result()
	}
}

function getRandomFloat(min: number, max: number): number {
	return Math.random() * (max - min) + min
}

function asyncFnFactory() {
	let idx = 1
	return {
		newAsyncFn: async function () {
			const result = delay(getRandomFloat(1000, 5000), idx)
			idx++
			return function () {
				return result
			}
		},
	}
}

;(async () => {
	const { newAsyncFn } = asyncFnFactory()

	const foo = await newAsyncFn()
	const bar = await newAsyncFn()
	const baz = await newAsyncFn()
	const raz = await newAsyncFn()

	const asyncQueue = createQueue([foo, bar, baz])

	console.log(await asyncQueue.next())
	console.log(await asyncQueue.next())
	console.log(await asyncQueue.next())
})()
