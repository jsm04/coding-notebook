type Option<A> = Some<A> | None

type Some<A> = {
    readonly value: A
    readonly _tag: 'Some'
}

type None = {
    readonly _tag: 'None'
}

const some = <A>(a: A): Option<A> => ({
    _tag: 'Some',
    value: a,
})

const none: Option<never> = {
    _tag: 'None',
}
