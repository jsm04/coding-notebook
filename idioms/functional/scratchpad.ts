const { log } = console

const inverse = (n: number) => -n

class List<T> extends Array<T> {
    of = <T extends unknown[]>(...xs: T): T => xs
    static of = <T extends unknown[]>(...xs: T): T => xs
}

const rand = function* () {
    while (1) {
        yield Math.random()
    }
}

const scope = () => {
    let zero = 0,
        one = 1
    const modify = () => {
        log(zero, one)
        ;[zero, one] = [++zero, ++one]
    }
    return modify
}

function pipe<T>(...fns: ((arg: T) => T)[]): (arg: T) => T {
    return (input: T) => fns.reduce((acc, fn) => fn(acc), input)
}
