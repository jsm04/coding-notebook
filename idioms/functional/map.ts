export const map = <T, Cb>(array: T[], callback: (value: T, index: number, array: T[]) => Cb): Cb[] => {
    const result: Cb[] = []
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array))
    }
    return result
}

// Usage
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = map(numbers, (value) => value * 2)

console.log(doubledNumbers) // Output: [2, 4, 6, 8, 10]
