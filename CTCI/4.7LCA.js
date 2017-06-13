const BST = require('../utils/BSTclass')

// var lowestCommonAncestor = function(root, p, q) {
var lowestCommonAncestor = function(root, p, q) {
    let self = false
    if (root === null) return false
    if (root === p || root === q) self = true

    let left = lowestCommonAncestor(root.left, p, q)
    if (self && left === true) return root
    let right = lowestCommonAncestor(root.right, p, q)
    if (self && right === true) return root

    if (left === true && right === true) return root
    if (left.val !== undefined) return left
    if (right.val !== undefined) return right
    if (self || left === true || right === true) return true

    return false
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

console.log('LCA:17, 15, 30: ', lowestCommonAncestor(myBST.root, 15, 30)) //  17
console.log('LCA:50, 15, 90: ', lowestCommonAncestor(myBST.root, 15, 90)) //  50
console.log('LCA:17, 17, 30: ', lowestCommonAncestor(myBST.root, 17, 30)) //  17
console.log('LCA:52, 52, 90: ', lowestCommonAncestor(myBST.root, 52, 90)) //  52
console.log('LCA:70, 63, 90: ', lowestCommonAncestor(myBST.root, 63, 90)) //  70
