mainStack()

async function mainStack() {
	delay(100)
}

async function delay(secs: number) {
	await new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, secs * 1000)
	})
}
