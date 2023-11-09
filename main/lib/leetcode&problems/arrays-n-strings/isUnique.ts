const isUnique = function (str: string) {
	if (str.length > 128) return false
	const charSet = new Array<boolean[]>(128)

	for (let i = 0; i < str.length; i++) {
		let value = str.charAt(i)
		if (charSet[value]) {
			return false
		}
		charSet[value] = true
	}
	return true
}

const textToBinary = function (text: string) {
	let binaryString = ''
	for (let i = 0; i < text.length; i++) {
		const charCode = text.charCodeAt(i)
		const binaryChar = charCode.toString(2).padStart(8, '0') // Convert to binary and pad with zeros
		binaryString += binaryChar + ' ' // Add a space between binary characters for clarity
	}
	return binaryString.trim() // Remove the trailing space
}
