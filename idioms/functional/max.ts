const { log } = console

class Max<T> {
    a: T

    constructor(a: T) {
        this.a = a
    }

    id() {
        return this
    }

    compose(b: T | Max<T>) {
        if (!(b instanceof Max)) {
            b = new Max<T>(b)
        }
        return this.a > b.a ? this : b
    }

    toString() {
        return `Max(${this.a})`
    }
}

log(
    new Max(2).compose(new Max(3)).compose(new Max(5)).id().id() // => Max(5)
)
