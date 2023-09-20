/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

*/

const containsNearbyDuplicate = function (nums: number[], k: number): boolean {
	const window = new Set<number>()
	let L = 0
	for (let R = 0; R < nums.length; R++) {
		if (R - L > k) {
			window.delete(nums[L])
			L += 1
		}
		if (window.has(nums[R])) return true
		window.add(nums[R])
	}
	return false
}
