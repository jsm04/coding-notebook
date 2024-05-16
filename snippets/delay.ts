export function delay<T>(ms: number, dataSource: T): Promise<T> {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(dataSource)
        }, ms)
    )
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve()
        }, ms)
    )
}
