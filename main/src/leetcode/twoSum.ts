// Iterative brute force
const bruteForceTwoSum = (nums: number[], target: number): number[] | null => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
	return null
}

// Complement aproach
const twoSum = (nums: number[], target: number): number[] | null => {
	// creates an obj list that will work like value/index
	let numObj: Record<string, number> = {}
	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i]
		if (numObj[complement] !== undefined) {
			// if complement is found in the list return complements index[value] and current index
			return [numObj[complement], i]
		}
		// creates key/value pair with value/index
		numObj[nums[i]] = i
	}
	return null
}

// Data structure aproach
class TwoSum {
	private sets: number[]

	constructor() {
		this.sets = new Array<number>()
	}

	// Add the number to an internal data structure.
	public add(number: number): void {
		this.sets.push(number)
	}

	// Find if there exists any pair of numbers which sum is equal to the value.
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

const testTarget = 18
const nums = [2, 7, 11, 15]

console.log(twoSum(nums, testTarget))
