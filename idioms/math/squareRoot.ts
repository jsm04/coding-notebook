export class SquareRootCalculator {
    static calculate(value: number): number {
        if (value < 0) {
            throw new Error(
                'Cannot calculate the square root of a negative number'
            )
        }

        if (value === 0 || value === 1) {
            return value
        }

        let guess = value
        let epsilon = 0.00001 // Accuracy level

        while (true) {
            let nextGuess = 0.5 * (guess + value / guess)
            if (Math.abs(nextGuess - guess) < epsilon) {
                return nextGuess
            }
            guess = nextGuess
        }
    }
}
