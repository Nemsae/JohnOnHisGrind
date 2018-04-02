const BinaryTree = require('../utils/BinaryTree')

// NOTE: Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

function isSymmetric(root) {
  // console.log('isSymmetric    root: ', root);
  //  NOTE: keeping track of nodes at currDepth, at end of each level we split in half and compare
  let nodesAtCurrDepth = [];
  const queue = [root];

  let currDepth = 0;
  let nodesBeforeDepthIncrease = 1;
  let amountOfNodesNextDepth = 0;

  let symmetricStatus = true;

  symmetricWhileCheck: while (queue.length > 0) {
    let currentNode = queue.shift()
    // console.log('0    nodesBeforeDepthIncrease: ', nodesBeforeDepthIncrease);
    amountOfNodesNextDepth += 2;
    // amountOfNodesNextDepth += numberOfChildren(currentNode);
    // console.log('0    amountOfNodesNextDepth: ', amountOfNodesNextDepth);
    nodesAtCurrDepth.push(currentNode);

    if (--nodesBeforeDepthIncrease === 0) {
      // NOTE: check nodesAtCurrDepth, and compare if symmetrical
      if (currDepth > 0) {
        // console.log('1    nodesAtCurrDepth: ', nodesAtCurrDepth);
        const result = splitAndCompare(nodesAtCurrDepth);
        symmetricStatus = result.status;
        // console.log('while    symmetricStatus: ', symmetricStatus);
      }
      nodesAtCurrDepth = [];

      // console.log('1    nodesBeforeDepthIncrease: ', nodesBeforeDepthIncrease);
      // NOTE: to keep track of depth changes
      currDepth++;
      nodesBeforeDepthIncrease = amountOfNodesNextDepth;
      amountOfNodesNextDepth = 0;
    }
    // console.log('END    symmetricStatus: ', symmetricStatus);

    if (symmetricStatus === false) break symmetricWhileCheck;

    if (currentNode) {
        // console.log('currentNode: ', currentNode)
      queue.push(currentNode.left)
      queue.push(currentNode.right)
        // console.log('queue: ', queue)
      // if (currentNode.left) queue.push(currentNode.left)
      // if (currentNode.right) queue.push(currentNode.right)
    }
  }

  // console.log('Sanity:    symmetricStatus: ', symmetricStatus);
  if (symmetricStatus === false) return false;
  return true;
}

function numberOfChildren (node) {
  let count = 0;
  if (node && node.left) count++
  if (node && node.right) count++
  return count;
};

function splitAndCompare (arr) {
  let status = true;
  let mid = Math.ceil(arr.length / 2);

  let leftHalfNodes = arr.slice(0, mid)
  let rightHalfNodes = arr.slice(mid)
  // console.log('    leftHalfNodes: ', leftHalfNodes);
  // console.log('    rightHalfNodes: ', rightHalfNodes);

  for (let i = 0; i < mid; i++) {
    const leftNodeVal = (leftHalfNodes[i] && leftHalfNodes[i].val) || null
    const rightNodeVal = (rightHalfNodes[mid - 1 - i] && rightHalfNodes[mid - 1 - i].val) || null

    // console.log(i, '    leftNodeVal: ', leftNodeVal);
    // console.log(i, '    rightNodeVal: ', rightNodeVal);

    if (leftNodeVal !== rightNodeVal) {
      status = false;
      break;
    }
  }

  return {
    arr: [],
    status: status,
  }
}

let myBT = new BinaryTree

//  NOTE: FALSE
// myBT.add(1)
// myBT.add(null)
// myBT.add(2)

//  NOTE: FALSE
// myBT.add(1)
// myBT.add(2)
// myBT.add(2)
// myBT.add(null)
// myBT.add(3)
// myBT.add(null)
// myBT.add(3)

//  NOTE: TRUE
let case1 = [3,4,4,5,null,null,5,6,null,null,6]
case1.forEach(val => myBT.add(val))

//  NOTE: TRUE
// myBT.add(1)
// myBT.add(2)
// myBT.add(2)
// myBT.add(3)
// myBT.add(4)
// myBT.add(4)
// myBT.add(3)

console.log('myBT.root: ', myBT.root);

console.log(isSymmetric(myBT.root));
