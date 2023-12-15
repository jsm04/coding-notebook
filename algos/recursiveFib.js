//@ts-check
const { log, table } = console

const iife = (function (...args) {
    const fib = 1.61803398875
    const pi = 3.14159
    const range = {
        start: 1,
        finish: 100,
    }

    const areNumbersEqual = (A, B) => Math.abs(A - B) < Number.EPSILON
    const isInteger = (A) => Number.isInteger(A)
    const half = (A) => (B) => (A + B) / 2
    const extractNumberDecimals = (A) => parseFloat(A.toString().split('.'))

    const roundOrTruncate = (A) =>
        isInteger(A)
            ? A
            : extractNumberDecimals(A) > 0.5
            ? Math.round(A)
            : Math.trunc(A)

    const performFibAnalitics = function (r) {}

    performFibAnalitics(range)
})()

const mid = (L, R) => Math.floor(L + R) / 2

const binarySearch =
    (target) =>
    (A) =>
    (L = 0, R = A.length - 1, M = 0) =>
        L <= R
            ? (() => {
                  M = mid(L, R)
                  return A[M] === target
              })()
                ? M
                : A[M] < target
                ? binarySearch(A)(target)(M + 1, R)
                : binarySearch(A)(target)(L, M + 1)
            : -1

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

log(binarySearch(3)(list)())
