const BST = require('../utils/BSTclass')

// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
//
// Note:
// You may assume k is always valid, 1 ? k ? BST's total elements.
//
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(tree, k) {
  let root = tree.root
  if (root === null) return null
  let stack = []

  while (root) {
    console.log('k: ', k);
    while (root.left !== null) {
      stack.push(root)
      root = root.left
    }
    if (--k === 0) return root.val
    while (root.right === null) {
      root = stack.pop()
      if (--k === 0) return root.val
    }
    root = root.right
  }
};

let myBST = new BST
myBST.add(50)
myBST.add(17)
myBST.add(30)
myBST.add(52)
myBST.add(51)
myBST.add(70)
myBST.add(15)
myBST.add(63)
myBST.add(90)
console.log('myBST: ', myBST);

console.log('kthSmallest:1 ', kthSmallest(myBST, 1));  //  return 15
console.log('kthSmallest:2 ', kthSmallest(myBST, 2));  //  return 17
console.log('kthSmallest:3 ', kthSmallest(myBST, 3));  //  return 30
console.log('kthSmallest:4 ', kthSmallest(myBST, 4));  //  return 50
console.log('kthSmallest:5 ', kthSmallest(myBST, 5));  //  return 51
console.log('kthSmallest:6 ', kthSmallest(myBST, 6));  //  return 52
