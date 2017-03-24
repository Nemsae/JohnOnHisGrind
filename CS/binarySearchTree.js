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
  } else {
    let node = new Node(val)

    let current = this.root

    if (val < current.value) {

    }
  }
};


let myBST = new binarySearchTree
console.log('myBST: ', myBST);
