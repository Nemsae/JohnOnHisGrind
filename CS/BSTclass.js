class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class binarySearchTree {
  constructor(value) {
    if (value) {
      this.root = new Node(value)
    } else {
      this.root = null
    }
  }

  add(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    let current = this.root

    recurseBST(current, val)

    function recurseBST(node, val) {
      if (val <= node.data) {
        if (node.left === null) {
          node.left = new Node(val)
          console.log('node: ', node);
        } else {
          recurseBST(node.left, val)
        }
      } else {
        if (node.right === null) {
          node.right = new Node(val)
          console.log('node: ', node);
        } else {
          recurseBST(node.right, val)
        }
      }
    }
  }
}

let myBST = new binarySearchTree
let myBST2 = new binarySearchTree(7)

console.log('myBST: ', myBST);
console.log('myBST2: ', myBST2);

console.log(myBST.add(50))
console.log(myBST.add(17))
console.log(myBST.add(30))
console.log(myBST.add(52))
console.log(myBST.add(51))
console.log(myBST.add(70))
console.log(myBST.add(15))
console.log(myBST.add(63))
console.log(myBST.add(90))
