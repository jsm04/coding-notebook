const isEditDistanceOne = function (s1: string, s2: string) {
	// Find lengths of given strings
	let s1_len = s1.length,
		s2_len = s2.length

	// If difference between lengths is  more than 1, then strings can't be at one distance
	if (Math.abs(s1_len - s2_len) > 1) return false

	// Count of edits
	let count = 0
	let s1_idx = 0,
		s2_idx = 0

	while (s1_idx < s1_len && s2_idx < s2_len) {
		// If current characters don't match
		if (s1[s1_idx] != s2[s2_idx]) {
			// If length of one string is more, then only possible edit is to remove a character
			if (s1_len > s2_len) s1_idx++
			else if (s1_len < s2_len) s2_idx++
			// If lengths of both strings is same
			else {
				s1_idx++
				s2_idx++
			}
			// Increment count of edits
			count++
		}
		// If current characters match
		else {
			s1_idx++
			s2_idx++
		}
	}

	// If last character is extra  in any string
	if (s1_idx < s1_len || s2_idx < s2_len) count++
	return count === 1
}

let s1 = 'gfgf'
let s2 = 'gff'

console.log(isEditDistanceOne(s1, s2))
