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

// Example usage
async function main() {
    let counter = 0

    // Condition: Keep polling until counter reaches 5
    const condition = () => counter >= 5

    // Action: Increment counter
    const action = async () => {
        counter++
        console.log(`Counter: ${counter}`)
    }

    // Start polling with an interval of 1 second
    await poll(1000, condition, action)

    console.log('Polling finished')
}

main().catch((err) => console.error(err))
