export type Either<E, A> = Left<E> | Right<A>

export type Left<E> = {
    readonly _tag: 'Left'
    readonly value: E
}

export type Right<A> = {
    readonly _tag: 'Right'
    readonly value: A
}

const left = <E, A = never>(e: E): Either<E, A> => ({
    _tag: 'Left',
    value: e,
})

const right = <A, E = never>(a: A): Either<E, A> => ({
    _tag: 'Right',
    value: a,
})
