//
// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans = findHeight(root)
    // console.log('ans: ', ans)
    return ans === false ? false : true
    function findHeight(node) {
        if (node === null) return 0

        let leftHeight = findHeight(node.left)
        if (leftHeight === false) return false
        let rightHeight = findHeight(node.right)
        if (rightHeight === false) return false

        if (Math.abs(leftHeight - rightHeight) > 1) return false

        return Math.max(leftHeight, rightHeight) + 1
    }
};
