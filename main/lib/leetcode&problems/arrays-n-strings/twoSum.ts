const testTarget = 7
const nums = [3, 2, 4]

// Iterative brute force
const bruteForceTwoSum = (
	nums: number[],
	target: number
): number[] | undefined => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
	return
}

// Complement aproach
const twoSum = (nums: number[], target: number): number[] | undefined => {
	const map: Record<string, number> = {}

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		map[nums[i]] = i
		if (map[complement] !== undefined) {
			return [map[complement], i]
		}
	}
	return
}

// Data structure aproach
class TwoSum {
	private sets: number[]

	constructor() {
		this.sets = new Array<number>()
	}

	public add(number: number): void {
		this.sets.push(number)
	}

	public find(value: number): boolean {
		this.sets.sort((a, b) => a - b)

		for (let i = 0; i < this.sets.length; i++) {
			if (this.sets[i] > value) break
			for (let j = i + 1; j < this.sets.length; j++) {
				if (this.sets[i] + this.sets[j] === value) {
					return true
				}
			}
		}
		return false
	}
}

console.log(twoSum(nums, testTarget))
