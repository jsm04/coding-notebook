//@ts-check
const { log, table } = console

const mid = (L, R) => Math.floor(L + R) / 2

const binarySearch =
    (target) =>
    (A) =>
    (L = 0, R = A.length - 1, M = 0) =>
        L <= R ?
            (
                (() => {
                    M = mid(L, R)
                    return A[M] === target
                })()
            ) ?
                M
            : A[M] < target ? binarySearch(A)(target)(M + 1, R)
            : binarySearch(A)(target)(L, M + 1)
        :   -1

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

log(binarySearch(3)(list)())
