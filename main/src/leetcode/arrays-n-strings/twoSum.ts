/* Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const testTarget = 7
const nums = [3, 2, 4]

// Iterative brute force
const bruteForceTwoSum = (nums: number[], target: number): number[] | undefined => {
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
	// creates an obj list that will work like value/index
	const map: Record<string, number> = {}

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		// creates key/value pair with value/index
		map[nums[i]] = i
		// if use !map[complement] zero force coercion to false, use strict equality instead
		if (map[complement] !== undefined) {
			// if complement is found in the list return complements index[value] and current index
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

console.log(twoSum(nums, testTarget))
