import { delay } from '../../utilities/utils'
import { logTimings } from './classDecorators'
import { simpleLog, timing } from './methodDecorators'
import { important } from './parameterDecorator'

@logTimings
class Users {
	users = new Map<string, string>()

	@timing()
	async getUsers() {
		return await delay(1000, this.users.values())
	}

	@timing()
	async getUser(@important id: number) {
		const parsedId = String(id)
		this.users.set(parsedId, `user: ${id}`)
		return await delay(50, this.users.get(parsedId))
	}
}

async function main() {
	const users = new Users()
	const user = await users.getUser(22)

	console.log(`Got ${JSON.stringify(user)}`)
	await users.getUser(42)

	console.log(await users.getUsers())
	// @ts-ignore
	users?.printTimings()
}

main().then(console.log)
