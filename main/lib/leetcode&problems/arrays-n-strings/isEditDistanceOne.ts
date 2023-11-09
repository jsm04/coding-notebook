const isEditDistanceOne = (s1: string, s2: string) => {
	let s1_len = s1.length,
		s2_len = s2.length

	if (Math.abs(s1_len - s2_len) > 1) return false

	let count = 0
	let s1_idx = 0,
		s2_idx = 0

	while (s1_idx < s1_len && s2_idx < s2_len) {
		if (s1[s1_idx] != s2[s2_idx]) {
			if (s1_len > s2_len) s1_idx++
			else if (s1_len < s2_len) s2_idx++
			else {
				s1_idx++
				s2_idx++
			}
			count++
		} else {
			s1_idx++
			s2_idx++
		}
	}

	if (s1_idx < s1_len || s2_idx < s2_len) count++
	return count === 1
}
let s1 = 'gfgf'
let s2 = 'gff'

console.log(isEditDistanceOne(s1, s2))
