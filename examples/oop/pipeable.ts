class Pipeable<T> {
    #queue: ((v: T) => T)[] = []
    #value: T

    constructor(value: T) {
        this.#value = value
    }

    apply(fn: (v: T) => T) {
        this.#queue.push(fn)
        return this
    }

    collect() {
        this.#queue.forEach((func) => (this.#value = func(this.#value)))
        return this
    }

    get() {
        return this.#value
    }

    print() {
        console.log(this.#value)
        return this
    }
}

const pipe = new Pipeable(1)
    .apply((x) => x * 2)
    .apply((x) => x * 100)
    .apply((x) => 300 + x)
    .print()
    .collect()
    .print()
