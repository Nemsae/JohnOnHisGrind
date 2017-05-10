// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
//
//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    console.log('root: ', root)

    while ((root - p) * (root - q) > 0) {
      root = p < root ?  root.left : root.right
    }
    return root
};
// var lowestCommonAncestor = function(root, p, q) {
//     console.log('root: ', root)
//
//     if (root === null) return false
//     if (root === p || root === q) {
//       console.log(root.val, 'Root is P || Q')
//       let left = lowestCommonAncestor(root.left, p, q)
//       // console.log('left? ', left)
//       let right = lowestCommonAncestor(root.right, p, q)
//       // console.log('right? ', right)
//       //
//       if (left || right) {
//         console.log(root.val, 'left or right')
//         return root
//       } else {
//         console.log(root.val, 'left and right is null/false')
//         return true
//       }
//       // return (root.left && lowestCommonAncestor(root.left, p, q)) || (root.right && lowestCommonAncestor(root.right, p, q)) ? root : true
//     } else {
//       let left = lowestCommonAncestor(root.left, p, q)
//       console.log(root.val, 'ELSE left: ', left)
//       let right = lowestCommonAncestor(root.right, p, q)
//       console.log(root.val, 'ELSE right: ', right)
//       if (left && right) {
//         console.log(root.val, 'ELSE right && left is TRUE')
//         return root
//       } else if (left === true || right === true) {
//         console.log(root.val, 'ELSE right || left is TRUE')
//         return true
//       }
//     }
// };
