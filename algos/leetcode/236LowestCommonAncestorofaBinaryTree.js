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
