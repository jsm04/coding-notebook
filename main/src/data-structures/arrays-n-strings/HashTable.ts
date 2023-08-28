class HashTable<K, V> {
	private table: Array<Array<[K, V]>>
	private size: number

	constructor(size: number = 100) {
		this.size = size
		this.table = new Array<Array<[K, V]>>(size)
	}

	private hash(key: K): number {
		const keyString = JSON.stringify(key)
		let hashValue = 0

		for (let i = 0; i < keyString.length; i++) {
			hashValue += keyString.charCodeAt(i)
		}
		return hashValue % this.size
	}

	set(key: K, value: V): void {
		const index = this.hash(key)

		if (!this.table[index]) {
			this.table[index] = []
		}

		const entry = this.table[index].find(([storedKey]) => storedKey === key)

		if (entry) {
			entry[1] = value // Update existing entry
		} else {
			this.table[index].push([key, value]) // Insert new entry
		}
	}

	get(key: K): V | undefined {
		const index = this.hash(key)

		if (!this.table[index]) {
			return
		}

		const entry = this.table[index].find(([storedKey]) => storedKey === key)

		return entry ? entry[1] : undefined
	}

	remove(key: K): void {
		const index = this.hash(key)

		if (this.table[index]) {
			this.table[index] = this.table[index].filter(([storedKey]) => storedKey !== key)
		}
	}
}
