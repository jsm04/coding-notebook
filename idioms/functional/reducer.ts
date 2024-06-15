export const reduce = <T, U>(
    array: T[],
    callback: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
    initialValue: U
): U => {
    let accumulator = initialValue

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array)
    }

    return accumulator
}

// Example usage:
const numbers = [1, 2, 3, 4, 5]

const sum = reduce(numbers, (acc, currentValue) => acc + currentValue, 0)
console.log(sum) // Output: 15
