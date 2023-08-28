const setZeroes = function (matrix: number[][]): void {
	const rowsToZero = new Set<number>()
	const colsToZero = new Set<number>()

	const numRows = matrix.length
	const numCols = matrix[0].length

	// First pass: Identify rows and columns to be zeroed out
	for (let row = 0; row < numRows; row++) {
		for (let col = 0; col < numCols; col++) {
			if (matrix[row][col] === 0) {
				rowsToZero.add(row)
				colsToZero.add(col)
			}
		}
	}
	// Second pass: Set elements in identified rows and columns to zero
	for (let row = 0; row < numRows; row++) {
		for (let col = 0; col < numCols; col++) {
			if (rowsToZero.has(row) || colsToZero.has(col)) {
				matrix[row][col] = 0
			}
		}
	}
}

class Matrix {
	public static setZeros(matrix: number[][]): void {
		const row: boolean[] = new Array(matrix.length)
		const col: boolean[] = new Array(matrix[0].length)

		for (let currRow = 0; currRow < matrix.length; currRow++) {
			for (let currCol = 0; currCol < matrix[0].length; currCol++) {
				if (matrix[currRow][currCol] === 0) {
					currRow[currRow] = true
					currCol[currCol] = true
				}
			}
		}

		for (let currRow = 0; currRow < row.length; currRow++) {
			if (row[currRow]) this.nullifyRow(matrix, currRow)
		}

		for (let currCol = 0; currCol < col.length; currCol++) {
			if (col[currCol]) this.nullifyCol(matrix, currCol)
		}
	}

	private static nullifyRow(matrix: number[][], row: number) {
		for (let i = 0; i < matrix[0].length; i++) {
			matrix[row][i] = 0
		}
	}

	private static nullifyCol(matrix: number[][], col: number) {
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[j][col] = 0
		}
	}
}

// Example usage
const matrix = [
	[1, 2, 3],
	[4, 0, 6],
	[7, 8, 9],
]

console.log(`original matrix:`, matrix)
Matrix.setZeros(matrix)
console.log(`mutated matrix:`, matrix)
