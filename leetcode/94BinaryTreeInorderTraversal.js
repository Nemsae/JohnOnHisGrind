// Given a binary tree, return the inorder traversal of its nodes' values.
//
// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].
//
// Note: Recursive solution is trivial, could you do it iteratively?


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let inOrderArr = []
    let stack = []
    let stackLen = 0
    while (root) {
        // console.log('root is : ', root, 'inOrderArr is: ', inOrderArr)
        while (root.left !== null) {
            //console.log('Sanity:1 ', root)
            stack.push(root)
            stackLen++
            root = root.left
            //console.log('Sanity:2 ', root, 'stack: ', stack)
        }

        inOrderArr.push(root.val)

        while (root.right === null && stackLen !== 0) {
            // console.log('root.right:b4 ', root, 'stack: ', stack)
            root = stack.pop()
            stackLen--
            inOrderArr.push(root.val)
            // console.log('root.right:a4 ', root)
        }

        root = root.right
    }

    return inOrderArr
};
