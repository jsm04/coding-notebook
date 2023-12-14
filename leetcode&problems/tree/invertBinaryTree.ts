/* Constraints:
 The number of nodes in the tree is in the range [0, 100].
 -100 <= Node.val <= 100
*/

export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

export const invertTree = function (root: TreeNode | null): TreeNode | null {
	if (!root) return null

	const tmp = root.left
	root.left = root.right
	root.right = tmp

	invertTree(root.left)
	invertTree(root.right)

	return root
}

const example = new TreeNode(
	4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(7, new TreeNode(6), new TreeNode(9))
)
