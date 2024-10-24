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

export async function retry<T>(
    fn: () => Promise<T>,
    retries: number,
    delayMs: number
): Promise<T> {
    let attempts = 0
    while (attempts < retries) {
        try {
            return await fn()
        } catch (err) {
            if (attempts === retries - 1) throw err
            await sleep(delayMs)
            attempts++
        }
    }
    throw new Error('Max retries reached')
}

export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delayMs: number
): T {
    let timeoutId: NodeJS.Timeout
    return ((...args: Parameters<T>) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn(...args), delayMs)
    }) as T
}

export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('Operation timed out'))
        }, ms)

        promise
            .then((result) => {
                clearTimeout(timeout)
                resolve(result)
            })
            .catch((err) => {
                clearTimeout(timeout)
                reject(err)
            })
    })
}

async function poll(
    interval: number,
    condition: () => boolean,
    action: () => Promise<void>
) {
    while (!condition()) {
        await action()
        await new Promise((resolve) => setTimeout(resolve, interval))
    }
}
