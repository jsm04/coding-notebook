const search = function (nums: number[], target: number): number {
	let left = 0,
		right = nums.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

const test_case = [-1, 0, 3, 5, 9, 12]

const test = search(test_case, 9)

console.log(`test:`, test)
