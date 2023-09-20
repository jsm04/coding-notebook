export const buildEnum = <T extends string>(values: T[]) => {
	const enumObject = <{ [key in T]: key }>{}
	for (const value of values) {
		enumObject[value] = value
	}
	return enumObject
}

const colorsArray = ['Red', 'Green', 'Blue']
const ColorEnum = buildEnum(colorsArray)

console.log(ColorEnum.Red) // Output: "Red"
console.log(ColorEnum.Green) // Output: "Green"
console.log(ColorEnum.Blue) // Output: "Blue"