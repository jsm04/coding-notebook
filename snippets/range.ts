const range = <T extends number>(start: T, stop: T, step: number = 1) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    )

console.log(range(1, 100))
