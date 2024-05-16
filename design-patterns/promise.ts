enum PromiseState {
    Pending = 'pending',
    Fulfilled = 'fulfilled',
    Rejected = 'rejected',
}

type Executor<T> = (
    resolve: (value?: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
) => void

class CustomPromise<T> {
    private state: PromiseState = PromiseState.Pending
    private value?: T
    private reason?: any
    private onFulfilledCallbacks: ((value: T) => void)[] = []
    private onRejectedCallbacks: ((reason: any) => void)[] = []

    constructor(executor: Executor<T>) {
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    private resolve(value?: T | PromiseLike<T>): void {
        if (this.state !== PromiseState.Pending) return

        if (value instanceof CustomPromise) {
            value.then(
                (val) => this.resolve(val),
                (reason) => this.reject(reason)
            )
            return
        }

        this.state = PromiseState.Fulfilled
        this.value = value
        this.onFulfilledCallbacks.forEach((callback) => callback(value))
    }

    private reject(reason: any): void {
        if (this.state !== PromiseState.Pending) return
        this.state = PromiseState.Rejected
        this.reason = reason
        this.onRejectedCallbacks.forEach((callback) => callback(reason))
    }

    then<U>(
        onFulfilled?: (value: T) => U | CustomPromise<U>,
        onRejected?: (reason: any) => any
    ): CustomPromise<U> {
        return new CustomPromise<U>((resolve, reject) => {
            const handleFulfilled = (value: T) => {
                try {
                    if (typeof onFulfilled === 'function') {
                        const result = onFulfilled(value)
                        if (result instanceof CustomPromise) {
                            result.then(resolve, reject)
                        } else {
                            resolve(result)
                        }
                    } else {
                        resolve(value as any)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            const handleRejected = (reason: any) => {
                if (typeof onRejected === 'function') {
                    try {
                        const result = onRejected(reason)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                } else {
                    reject(reason)
                }
            }

            if (this.state === PromiseState.Pending) {
                this.onFulfilledCallbacks.push(handleFulfilled)
                this.onRejectedCallbacks.push(handleRejected)
            } else if (this.state === PromiseState.Fulfilled) {
                setTimeout(() => handleFulfilled(this.value as T), 0)
            } else {
                setTimeout(() => handleRejected(this.reason), 0)
            }
        })
    }
}
