class ArrayList<T> {
    private array: T[]
    private capacity: number
    private size: number

    constructor(initialCapacity: number = 10) {
        this.capacity = initialCapacity
        this.array = new Array<T>(this.capacity)
        this.size = 0
    }

    resize(newCapacity: number): void {
        const newArray = new Array<T>(newCapacity)
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i]
        }
        this.array = newArray
        this.capacity = newCapacity
    }

    add(element: T): void {
        if (this.size === this.capacity) {
            this.resize(this.capacity * 2)
        }
        this.array[this.size] = element
        this.size++
    }

    get(index: number): T | undefined {
        if (index >= 0 && index < this.size) {
            return this.array[index]
        }
        return
    }

    remove(index: number): void {
        if (index >= 0 && index < this.size) {
            for (let i = index; i < this.size - 1; i++) {
                this.array[i] = this.array[i + 1]
            }
            this.size--
            if (this.size <= this.capacity / 4 && this.capacity > 10) {
                this.resize(Math.max(10, this.capacity / 2))
            }
        }
    }
}
