/*
In this example, we use a Uint8Array to represent the bit vector. Each bit of the array corresponds to a number. If the bit is set (1), the number is considered composite (not prime), and if the bit is not set (0), the number is considered prime.

The << operator is used to manipulate individual bits within the bit vector. isPrime[Math.floor(i / 8)] & (1 << (i % 8)) checks if the bit corresponding to the number i is set, and isPrime[Math.floor(j / 8)] |= (1 << (j % 8)) sets the bit for the composite numbers.

This algorithm is particularly useful when you need to efficiently find prime numbers within a given range using minimal memory.
*/

function sieveOfEratosthenes(limit: number) {
	const isPrime = new Uint8Array(Math.ceil(limit / 8)) // Using 1 bit per number

	for (let i = 2; i * i <= limit; i++) {
		if ((isPrime[Math.floor(i / 8)] & (1 << i % 8)) === 0) {
			for (let j = i * i; j <= limit; j += i) {
				isPrime[Math.floor(j / 8)] |= 1 << j % 8 // Mark as composite
			}
		}
	}

	const primes = <number[]>[]
	for (let i = 2; i <= limit; i++) {
		if ((isPrime[Math.floor(i / 8)] & (1 << i % 8)) === 0) {
			primes.push(i)
		}
	}

	return primes
}

const limit = 100
const primes = sieveOfEratosthenes(limit)

console.log(primes)
