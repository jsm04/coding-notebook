const isPermutation = (str1: string, str2: string): boolean => {
	if (str1.length !== str2.length) return false
	const uniqueCharSet = new Array<number>(128)

	for (let i = 0; i < str1.length; i++) {
		const char = str1.charCodeAt(i)
		if (!uniqueCharSet[char]) uniqueCharSet[char] = 1
		uniqueCharSet[char]++
	}

	for (let i = 0; i < str2.length; i++) {
		const char = str2.charCodeAt(i)
		uniqueCharSet[char]
		if (uniqueCharSet[char] < 0) return false
	}

	return true
}
