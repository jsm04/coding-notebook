class Pipeable<T> {
    private _done: Boolean = false
    private queue: T[] = []

    constructor(private _value: T) {}

    apply(fn: (v: T) => T) {
        this._value = fn(this._value)
        return this
    }

    value() {
        console.dir({
            value: this._value,
            done: this._done,
        })
    }
}

const pipe = new Pipeable(1)

pipe.apply((x) => x * 2)
    .apply((x) => x * 100)
    .apply((x) => 300 + x)
    .apply((x) => x / 2)
    .value()
