const findBinary = (decimal: number, result: string = '') => {
    if (decimal === 0) {
        return result
    }
    result = (decimal % 2).toString() + result
    return findBinary(Math.floor(decimal / 2), result)
}

const binary: string = findBinary(233, '')
console.log(binary)
