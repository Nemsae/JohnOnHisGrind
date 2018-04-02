// NOTE: This binary tree will add nodes using a queue to fill depth first, from left to right

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  constructor(value) {
    if (value) {
      this.root = new Node(value)
      this.addQueue = []
    } else {
      this.root = null
      this.addQueue = []
    }
  }

  add(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    let current = this.root

    addNode(current, val, this)

    function addNode(node, val, parent) {
      // console.log('    parent.addQueue: ', parent.addQueue);
      if (node.left === null) {
        node.left = new Node(val);
        parent.addQueue.push(node.left)
        return
      }
      if (node.right === null) {
        node.right = new Node(val);
        parent.addQueue.push(node.right)
        return
      }
      // console.log(val, 'node: ', node);
      // console.log('    val: ', val);
      let queuedNode;
      queuedNode = parent.addQueue[0]
      //  check queuedNode, and if it's left and right exists, otherwise completely remove from array and move to next queue
      if (queuedNode.left && queuedNode.right) {
        parent.addQueue.shift()
        queuedNode = parent.addQueue[0]
      }
      addNode(queuedNode, val, parent);

      // goes into left, adds, and then goes to next queued node instead of going to the right
    }
  }
}

module.exports = BinaryTree

/* TESTS */

// let myBT = new BinaryTree

// console.log('myBT: ', myBT);
//
// console.log(myBT.add(1))
// console.log(myBT.add(2))
// console.log(myBT.add(2))
// console.log(myBT.add(3))
// console.log(myBT.add(4))
// console.log(myBT.add(4))
// console.log(myBT.add(3))
// console.log(myBT.add(5))
// console.log(myBT.add(6))
// console.log(myBT.add(7))
// console.log(myBT.add(8))
// console.log(myBT.add(8))
// console.log(myBT.add(7))
// console.log(myBT.add(6))
// console.log(myBT.add(5))
// console.log(myBT.add(63))
// console.log(myBT.add(90))

// console.log('myBT:000 ', myBT);
// console.log('myBT.root: ', myBT.root);
// console.log('myBT.root.left: ', myBT.root.left);
// console.log('myBT.root.right: ', myBT.root.right);
