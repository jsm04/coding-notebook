/* Optimal
Runtime
78ms
Beats 87.69%of users with TypeScript
Memory
56.13MB
Beats 25.41%of users with TypeScript

*/

const containsDuplicate = function (nums: number[]) {
	const set = new Set<number>()
	for (const num of nums) {
		if (set.has(num)) return true
		set.add(num)
	}
	return false
}

/*
	Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const containsDuplicateWithBooleanArray = function (nums: number[]) {
	const array = <number[]>[]
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i]
		if (!array[curr]) array[curr] = 0
		const newValue = ++array[curr]
		if (newValue === 2) return true
	}
	return false
}

/*
Runtime
97ms
Beats 43.05%of users with TypeScript
Memory
54.38MB
Beats 74.64%of users with TypeScript
*/

const containsDuplicateWithMap = function (nums: number[]) {
	const map = new Map<number, number>()
	for (const number of nums) {
		if (!map.has(number)) {
			map.set(number, 0)
		}
		let temp = map.get(number)! + 1
		if (temp >= 2) return true
		map.set(number, temp + 1)
	}
	return false
}

/*
Runtime
78ms
Beats 87.69%of users with TypeScript

Memory
59.32MB
Beats 9.85%of users with TypeScript
*/

const input = [1, 2, 3, 1]
console.log(containsDuplicate(input))
