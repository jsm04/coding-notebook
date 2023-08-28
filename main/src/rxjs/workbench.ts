import fetch, { Response } from 'node-fetch'
import { AsyncSubject } from 'rxjs'
const url = 'https://fakestoreapi.com/products'

;(async function () {
	console.time('messure')
	const store$ = new AsyncSubject()

	store$.subscribe((event) => console.log('Before event', event))
	store$.next(await simpleFetch(url))
	store$.subscribe((event) => console.log('After event', event))

	console.timeEnd('messure')
})()

async function simpleFetch(uri: string) {
	try {
		const request = await fetch(url)
		if (request.ok) {
			return request.json()
		} else {
			throw request
		}
	} catch (requestError) {
		if (requestError instanceof Response) {
			return console.log(
				'Something wrong occurred: ',
				requestError.statusText,
				'\n',
				'Status code:',
				requestError.status
			)
		} else {
			return console.log('Something went wrong: ', requestError)
		}
	}
}
