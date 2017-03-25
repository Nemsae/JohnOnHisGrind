//  Implement a binary search tree

function Node (val) {
  this.value = val
  this.left = null
  this.right = null
}

function binarySearchTree(val) {
  this.root = null
}

// 11
binarySearchTree.prototype.push = function (val) {
  if (this.root === null) {
    this.root = new Node(val)
    return this.root
  }

  let newNode = new Node(val)

  let current = this.root

  //  recurse through given node, with val
  function recurseTree(node, val) {
    if (val <= node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        recurseTree(node.left, val)
      }
    } else if (val > node.value) {
      if (node.right === null) {
        node.right = newNode
      } else {
        recurseTree(node.right, val)
      }
    }

    console.log('Sanity:', current);
    return current
  }

  recurseTree(current, val)
};


let myBST = new binarySearchTree
console.log('myBST: ', myBST);
console.log('7: ', myBST.push(7))
console.log('6: ', myBST.push(6))
console.log('6.5: ', myBST.push(6.5))
console.log('5: ', myBST.push(5))
console.log('12: ', myBST.push(12))
console.log('14: ', myBST.push(14))
console.log('11: ', myBST.push(11))
console.log('11: ', myBST.push(13))
